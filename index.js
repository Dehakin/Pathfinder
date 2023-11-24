const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

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

//Default page
app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public'});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});