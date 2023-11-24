const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
console.log(url);
const client = new MongoClient(url);
const db = client.db('Cluster0');
const sheetCollection = db.collection('sheet'); 

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

async function addSheet(sheet) {
    const result = await sheetCollection.insertOne(sheet);
    return result;
}

async function getAllSheets () {
    const cursor = sheetCollection.find();
    return cursor.toArray();
}

module.exports = { addSheet, getAllSheets };