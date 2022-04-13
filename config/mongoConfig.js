const mongoose = require('mongoose');

const user = process.env.MONGO_DB_USER
const password = process.env.MONGO_DB_PASSWORD
const cluster = process.env.MONGO_DB_CLUSTER
const dbname = process.env.MONGO_DB_DBNAME
const uri = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
const configParams = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(uri, configParams);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => { console.log("Mongo DB connected successfully") })

module.exports = mongoose

