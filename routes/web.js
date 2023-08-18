var express = require('express');
const { curly } = require("node-libcurl");
var router = express.Router();

/* 引入 Controller */
const testController = new (require('../controllers/testController'))

/* 設定Web Router. */
router.get('/', function (req, res, next) {
    res.render('frontsite/index');
});

// router.get('/index', testController.index);

// router.get('/hello', (req, res) => {
//     res.render('hello');
// });

// router.get('/search', (req, res) => {
//     res.render('search');
// });

// router.post('/searchList', (req, res) => {
//     res.send(req.body);
// });

router.get('/testAPI', async (req, res) => {
    const { statusCode, data, headers } = await curly.post('http://localhost:3000/api/', {
        postFields: JSON.stringify({ field: 'value' }),
        httpHeader: [
            'Content-Type: application/json',
            'Accept: application/json'
        ],
    })
    res.send(data);
});

module.exports = router;