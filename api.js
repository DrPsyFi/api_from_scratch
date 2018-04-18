const express = require('express')
const app = express
const port = process.env.PORT || 3000
const bodyParser = require('bodyParser')
const morgan = require('morgan')

if (process.env.NODE_ENV === 'development')app.use(morgan('dev'))
app.use(bodyParser.json())

const routes = require('./Router')
app.use(routes)

app.use((err,req,res, next) => {
  const status = err.status || 500
  res.status(status).json({error:{message: "Not Found"}})
})

const listener = () => console.log(`Listening on port ${port}`)

app.listen(port, listen)

module.exports = app
