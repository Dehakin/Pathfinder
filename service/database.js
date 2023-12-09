const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
console.log(url);
const client = new MongoClient(url);
const db = client.db('Cluster0');
const sheetCollection = db.collection('sheet'); 
const userCollection = db.collection('user');

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

function getUserByToken (token) {
      return userCollection.findOne({ token : token });
}

function getUserByUsername (name) {
  return userCollection.findOne({ username: name});
}

async function createUser(username, password) {
  // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Make user object with UUID
    const user = {
      username : username,
      password : hash,
      token : uuid.v4()
    };

    // Add to database
    await userCollection.insertOne(user);

    // Return it
    return user;
}

async function getAllUsers() {
  const cursor = userCollection.find();
  return cursor.toArray();
}

module.exports = { 
  addSheet, 
  getAllSheets, 
  createUser, 
  getAllUsers, 
  getUserByToken,
  getUserByUsername,
 };