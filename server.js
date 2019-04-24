const express = require('express')
const cookieParser = require('cookie-parser')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const handler = routes.getRequestHandler(app)

const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

app
  .prepare()
  .then(() => {
    const server = express()
    // server.use(handler)

    server.use(bodyParser.json())
    server.use(cookieParser())

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    
    server.post('/api/contact', (req, res) => {
      const { email, name } = req.body
      console.log(req.body)
      res.send('success')
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
