var express = require('express');
var router = express.Router();

/* 引入 Controller */
const todoController = require('../controllers/todo');

/* 設定Web Router. */
router.get('/', function (req, res, next) {
  res.render('hello');
});

router.get('/hello', (req, res) => {
  res.render('hello');
});

router.get('/search', (req, res) => {
  res.render('search');
});

router.post('/searchList', (req, res) => {
  res.send(req.body);
});

router.get('/todos', todoController.getAll);

router.get('/test', todoController.getDB);

module.exports = router;