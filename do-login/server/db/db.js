const mongoose = require('mongoose')
const config = require('config-lite')

mongoose.connect(config.mongodb, {useMongoClient: true})
mongoose.Promise = global.promise;

let db = mongoose.connection

db.once('open', function() {
  console.log('Mongodb started successfully')
})