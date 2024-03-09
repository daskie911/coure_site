const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => {
  res.render('admin', { error: '' })
})

router.post('/', (req, res) => {
  const { login, password } = req.body
  if (login === process.env.LOGIN && password === process.env.PASSWORD) {
    req.session.user = login

    res.redirect('/')
  } else {
    res.render('admin', { error: 'Wrong password or email' })
  }
})

module.exports = router