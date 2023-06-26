require('dotenv').config()

module.exports.Config = {
  MongoUri: process.env.MONGO_URI,
  Database: process.env.DATABASE,
}
