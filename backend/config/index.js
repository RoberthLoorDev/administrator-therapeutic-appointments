require("dotenv").config();

module.exports.Config = {
    MongoUri: process.env.MONGO_URI,
    Database: process.env.MONGO_DATABSE,
    GmailUser: process.env.GMAIL_USER_TRASMITTER,
    GmailPassword: process.env.GMAIL_PASSWORD_TRASMITTER,
    GmailReciver: process.env.GMAIL_RECIVER,
};
