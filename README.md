# 只是一個不專業的NodeJS-MVC網頁框架

## 建立專案

- 安裝所需套件，

```powershell
npm install
```

- 再依照以下指令建立資料夾

```powershell
mkdir controllers
mkdir views
mkdir models
mkdir public
mkdir router
mkdir lib
```

## 說明
index.js 檔案說明：
```javascript
// 引入Express框架
const express = require('express');
const app = express();

// 設定模板引擎
app.set('view engine', 'ejs');

// 引入Controller
const HomeController = require('./controllers/HomeController');

// 設定路由
app.get('/', HomeController.index);

// 啟動服務
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

接著，在models文件夾中創建一個新文件，命名為message.js。在message.js文件中，我們定義了一個名為getMessage的函數，用於返回要在視圖中顯示的消息：

```javascript
exports.getMessage = () => {
  return "Hello, World!";
}
```

然後，在views文件夾中創建一個新文件，命名為index.ejs。在index.ejs文件中，我們使用EJS模板引擎來渲染HTML內容。下面是index.ejs文件的內容：

```html
<!DOCTYPE html>
<html>
<head>
	<title>Hello, World!</title>
</head>
<body>
	<h1><%= message %></h1>
</body>
</html>
```

最後，在controllers文件夾中創建一個新文件，命名為HomeController.js。在HomeController.js文件中，我們定義了一個名為index的函數，用於獲取消息並將其傳遞給視圖。下面是HomeController.js文件的內容：

```javascript
// 引入message模型
const messageModel = require('../models/message');

// 定義HomeController
const HomeController = {
  index: (req, res) => {
    const message = messageModel.getMessage();
    res.render('index', { message: message });
  }
};

// 導出HomeController
module.exports = HomeController;
```

現在，我們已經完成了MVC框架的所有組件。在終端中進入myapp文件夾，然後執行**`node app.js`**。接著在瀏覽器中訪問`http://localhost:3000`，您將看到網頁顯示"Hello, World!"。

希望這可以幫助您開始使用Node.js和Express框架編寫MVC框架的Web應用程序！
