
const express = require('express')
const sls = require('serverless-http')
const app = express()




app.get('/', (req, res) => {
  res.send('Just having fun deploying a lambda function * ')
});






module.exports.server = sls(app)
