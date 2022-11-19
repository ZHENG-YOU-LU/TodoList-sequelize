const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/', (req, res) => {
	User.findByPk(req.user.id) // 取出 Todo model 裡的所有資料
	.then((user) => {
		if (!user) throw new Error('user not found')

		return Todo.findAll({
			raw: true,
			nest: true, //把 Model 物件轉換成乾淨的 JavaScript 資料陣列
			where: { UserId: req.user.id }
		})
	})
	.then(todos =>{res.render('index', { todos })})
	.catch(error => console.log(error))
})

module.exports = router