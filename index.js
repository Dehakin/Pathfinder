const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api',apiRouter);

apiRouter.get('/sheets', (_req, res) => {
    res.send(sheets);
});

apiRouter.post('/sheets', (req, res) => {
    s = addSheet(req.body, sheets);
    res.send(s);
});

//Default page
app.use((_req, res) => {
    res.sendFile('index.html', { root : 'public'});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let sheets = [];
function addSheet (s, sheets) {
    sheets.push(s);
}