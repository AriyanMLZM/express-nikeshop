const express = require('express');
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./helpers/errorHandler')

const app = express();
const port = 4000

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.use('/', router)

app.use(errorHandler.handler404)
app.use(errorHandler.handlerServerErrors)

app.listen((port), () => {
  console.log(`Server is running at http://localhost:${port}`)
})
