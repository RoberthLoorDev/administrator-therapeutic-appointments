const mongoose = require('mongoose')

const { Config } = require('../config')

const DBConecction = async () => {
  try {
    const connected = await mongoose.connect(
      `${Config.MongoUri}/${Config.Database}`,
      {
        useNewUrlParser: true,
      }
    )

    console.log('Connected to Database')
  } catch (error) {
    console.log(error)
  }
}

module.exports.Database = {
  DBConecction,
}
