var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require('cookie-parser');
var session = require('express-session');

var mysql = require('../mysql');

module.exports = {
    Register: function(app){
        //设置 session
        app.use(cookieParser());
        app.use(session({
            secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
            name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
            cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
            resave: false,
            saveUninitialized: true,
        }));

        // app.post('/getuser', urlencodedParser, function(request, response){
        //     mysql.user(request.body, function(result){
        //         console.log(result)
        //         response.send(result);
        //     })
        // });
        app.get('/classify', function(request, response){
            mysql.query('classify', function(result){
                response.send(result);
            })
        })
        app.get('/category', function(request, response){
            mysql.category('menufile', request.query, function(result){
                response.send(result)
            })
        }),
        app.get('/del', function(request, response){
            console.log('del666')
            mysql.delete('menufile', request.query, function(result){
                if(result.affectedRows > 0){
                   response.send({succeed:true}) 
                }else{
                    response.send({succeed:false}) 
                }    
            })
        }),
        app.get('/add', function(request, response){
            console.log(request.query)
            mysql.add('menufile', request.query, function(result){
                response.send(result);
            })
        }),

        app.get('/addclassify', function(request, response){
            console.log(request.query)
            mysql.add('classify', request.query, function(result){
                response.send(result);
            })
        }),

        app.get('/renewal', function(request, response){
            console.log(request.query)
            mysql.update('menufile', request.query, function(result){
                response.send(result);
            })
        }),
        app.get('/seekNum', function(request, response){
            mysql.seek('menufile', request.query, function(result){
                response.send(result)
            })
        }),
        app.get('/seekName', function(request, response){
            mysql.seek('menufile', request.query, function(result){
                response.send(result)
            })
        })


    }
}