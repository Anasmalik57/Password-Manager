const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();
app.use(cors());
const port = 3000;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "vaultX";

app.use(bodyParser.json());
client.connect();

// Get All the passwords
app.get("/", async (req, res) => {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  res.json(findResult);
});

// Save a Password
app.post("/", async (req, res) => {
  console.log("Connected successfully to server");
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  console.log("Found documents =>", findResult);
  res.send({ success: true, statuscode: 200, result: findResult });
});

// Delete a Password by ID
app.delete("/", async (req, res) => {
  console.log("Connected successfully to server");
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  console.log("Found documents =>", findResult);
  res.send({ success: true, statuscode: 200, result: findResult });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
