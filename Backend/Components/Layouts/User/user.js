const express=require('express')
const router=express.Router();
const db=require('../../Config/config');
const ACCESS_TOKEN=require('../JWT/GlobalTokens')
const jwt=require('jsonwebtoken');

router.use(function(req,res,next){
    console.log(req.url,"@",Date.now());
    next();
})  



router.post('/adduser',(req,res)=>{
   let email=req.body.email;
    let password=req.body.password;
    let name=req.body.name;
    let user_type=req.body.user_type;
    console.log(email)
    const user={email:email}
    const accessToken=jwt.sign(user,ACCESS_TOKEN.ACCESS_TOKEN);

    db.run('INSERT INTO userdetails VALUES (?,?,?,?,NULL);',[email,name,password,user_type],function(error){
        if(error){
            console.log(error)
            res.send({
                message:0
            });
        }
            res.send({
                message:1,
                access_Token:accessToken
            })
    })
})


router.post('/userlogin', (req, res) => {
    let [email,password,user_type] = [req.body.email,req.body.password,req.body.user_type];
    const user={email:email}
    const accessToken=jwt.sign(user,ACCESS_TOKEN.ACCESS_TOKEN);

    db.get(`SELECT * FROM userdetails WHERE email = ? and password=? and user_type=? ;`,[email,password,user_type], (error, row) => {
        if (error) {
            console.error(error.message);
        }
        if (row) {
            console.log('1')
            res.send({message:1,
            access_Token:accessToken
        })
        } else {
            console.log('0') 
            res.send({
                message:0
            })
        
        }
    });
});



router.post('/usercheck', (req, res) => {
    let [email] = [req.body.email];
  

    db.get(`SELECT * FROM userdetails WHERE email = ?  ;`,[email], (error, row) => {
        if (error) {
            console.error(error.message);
        }
        if (row) {
            console.log('1')
            res.send({
                message:1
            })
        } else {
            console.log('0') 
            res.send({
                message:0
            })
        
        }
    });
});




router.get('/alluser',(req,res)=>{
    db.all('SELECT * FROM userdetails', [], (error, rows) => {
        if (error) {
            console.error(error.message);
        }
       res.send(rows)
    });
})

router.get('/Deletealluser',(req,res)=>{
    db.all('Delete  FROM userdetails', [], (error, rows) => {
        if (error) {
            console.error(error.message);
        }
       res.send(rows)
    });
})


module.exports=router;