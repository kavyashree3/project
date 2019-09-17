const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '2019',
    database : 'mydb'
});
db.connect();
app.get('/images', function(req,res){
  var sql = 'SELECT * FROM product';
  db.query(sql, (err, result)=>{
      if(err) throw err;
      console.log(result)
      res.send(result)
  });
  });
app.post('/data', function(req){
	console.log(req.body); 
    var data = {username:req.body.username,address:req.body.address,phonenum:req.body.phonenum,email:req.body.email,password:req.body.password};
    var sql = 'INSERT INTO user SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
});
});
app.post('/login', function(request,response) {
	var username = request.body.username;
  var password= request.body.password;

		db.query('SELECT * FROM user WHERE username = ? AND password= ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
        response.send(results)
        console.log("Login successful")
			} else {    
        console.log("Incorrect user name or password!!!")
			}			
    });
  });
app.listen(4001, ()=>{
  console.log('Server port 4001')
});