const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.post('/api/contact', (req, res) => {
      const { name, email, title, message } = req.query
      console.log(req.query)
      // SMTPサーバーの設定
      const transporter = nodemailer.createTransport(
        smtpTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          tls: true,
          // webメールのログインアカウント
          auth: {
            user: 'shintaro011224',
            pass: 'shinmatsu24'
          }
        })
      )
      transporter.sendMail(
        {
          from: 'お問い合わせ <shintaro011224@gmail.com>',
          // お問い合わせ受け取り先のメールアドレス
          to: 'shintaro011224@gmail.com',
          subject: title,
          text: message + '/' + name + '/' + email,
          html: message + '<br>' + name + '<br>' + email
        },
        function(err, response) {
          if (err) return next(err)
          console.log(response)
        }
      )
      transporter.sendMail(
        {
          from: 'ciehum <shintaro011224@gmail.com>',
          to: email,
          subject: title,
          text: message + '/' + name + '/' + email,
          html: message + '<br>' + name + '<br>' + email
        },
        function(err, response) {
          if (err) return next(err)
          console.log(response)
        }
      )
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
  })
