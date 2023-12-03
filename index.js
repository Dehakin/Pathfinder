const express = require('express');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const { WebSocketServer } = require('ws');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

const authCookieName = 'token';

app.use(express.json());

app.use(express.static('public'));

app.use(cookieParser());

app.set('trust proxy', true);

let apiRouter = express.Router();
app.use('/api',apiRouter);

apiRouter.get('/sheets', async (_req, res) => {
    const sheets = await DB.getAllSheets();
    res.send(sheets);
});

apiRouter.post('/sheets', async (req, res) => {
    DB.addSheet(req.body);
    const sheets = await DB.getAllSheets();
    res.send(sheets);
});

apiRouter.post('/auth/create', async (req, res) => { 
    if (await DB.getUserByUsername(req.body.username)) {
      res.status(409).send({msg : 'Existing user'});
    } else {
        const user = await DB.createUser(req.body.username, req.body.password);

        setAuthCookie(res,user.token);
        
        res.send({
            id : user._id
        });
    }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUserByUsername(req.body.username);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    console.log("Erroring");
    res.status(401).send({ msg: 'Unauthorized' });
  });
  
  apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });
  
  apiRouter.get('/user/:username', async (req, res) => {
    const user = await DB.getUser(req.params.username);
    if (user) {
      const token = req?.cookies.token;
      res.send({ username: user.username, authenticated: token === user.token });
      return;
    }
    res.status(404).send({ msg: 'Unknown' });
  });

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

//Default page
app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public'});
});

function setAuthCookie(res, authToken) {
  res.cookie (authCookieName, authToken, {
    secure : true,
    httpOnly : true,
    sameSite : 'strict',
  });
}


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Websocket stuff

const wss = new WebSocketServer({ noServer : true });

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

let connections = [];

wss.on('connection', (ws) => {
  const connection = {
    id: uuid.v4(),
    alive : true,
    ws : ws
  };
  connections.push(connection);

  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });

  ws.on('pong', () => {
    connection.alive = true;
  });
});

setInterval (() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
