var path = require('path');
var users = require('./users');
var Menu = require('./Menu');
<<<<<<< HEAD
var lh = require('./lh');
=======
>>>>>>> f68277b5e7ba4647e1990ff007b0faf1736c1540
var overBooking = require('./overBooking')

module.exports = {
    Register: function(express){
        var app = express();
        app.all('*', function(req, res, next) {
		    res.header("Access-Control-Allow-Origin", "*");
		    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		    res.header("X-Powered-By",' 3.2.1')
		    if(req.method=="OPTIONS") {
		      res.send(200);//让options请求快速返回
		    } else{
		      next();
		    }
		});
		lh.Register(app);
        users.Register(app);
       	Menu.Register(app);
       	overBooking.Register(app);
        app.listen(1212);
    }
}