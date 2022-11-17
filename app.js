const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-Override')
const bcrypt = require('bcryptjs')
const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
	res.send('hello word')
})
// 登入
app.get('/users/login', (req, res) => {
	res.render('login')
})

app.post('/users/login', (req, res) => {
	res.send('login')
})
// 註冊
app.get('/users/register', (req, res) => {
	res.render('register')
})

app.post('/users/register', (req, res) => {
	res.send('register')
})
// 登出
app.get('/users/logout', (req, res) => {
	res.send('logout')
})

app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`)
})