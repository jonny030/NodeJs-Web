var express = require('express');
var router = express.Router();

/* 引入 Controller */
const testController = new (require('../controllers/testController'))

/* 設定Web Router. */
router.get('/', function (req, res, next) {
    res.render('hello');
});

router.get('/index', testController.index);

router.get('/hello', (req, res) => {
    res.render('hello');
});

router.get('/search', (req, res) => {
    res.render('search');
});

router.post('/searchList', (req, res) => {
    res.send(req.body);
});

module.exports = router;