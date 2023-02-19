const express = require('express')
const router = express.Router();
const db = require('../../Config/config');
const Authorize = require("../JWT/AuthenticateToken");



router.use(function (req, res, next) {
    console.log(req.url, "@", Date.now());
    next();
})

router.post('/StudentDetail',Authorize.authenticateToken, (req, res) => {
    let [email] = [req.body.email];


    db.get(`SELECT * FROM userdetails WHERE email = ?  ;`, [email], (error, row) => {
        if (error) {
            console.error(error.message);
        }
        if (row) {
            console.log(row)
            res.send({
                status:200,
                message: row
            })
        } else {
            console.log('0')
            res.send({
                status:404,
                message: 0
            })

        }
    });
});


router.post('/StudentAddAnswer', Authorize.authenticateToken,(req, res) => {
   db.get(`SELECT * FROM userdetails WHERE email = ? `, [req.body.email], (error, row) => {
        if (error) {
            console.error(error.message);
        }
           const sql = `UPDATE Calculations SET student = ?, name = ?, input = ?, result = ?, master = ?, Evaluated = ? WHERE id = ?`;
    const data = [req.body.email,row.name,req.body.input,req.body.result,req.body.master,1, req.body.id];

    db.run(sql, data, function (err) {
        if (err) {
           res.send({
            status:404,
            message:err.message
           })
        }
        res.send({
            status:200,
            message:1

        })
    });
   
    })


 

});








router.get('/allcalculations', (req, res) => {
    db.all('SELECT * FROM Calculations', [], (error, rows) => {
        if (error) {
            console.error(error.message);
        }
        res.send(rows)
    });
})

module.exports = router;