const express = require("express");
const router = express.Router();
const db = require("../../Config/config");
const Authorize = require("../JWT/AuthenticateToken");

router.use(function(req, res, next) {
    console.log(req.url, "@", Date.now());
    next();
});

router.post("/MasterAddCalculationValues", Authorize.authenticateToken, (req, res) => {
    let email = req.body.email;
    let calculate_value = req.body.calculate_value;
    db.run(
        `INSERT INTO Calculations VALUES (NULL, "Not..Avilable", "Not...Avilable", ?, "Soon", ?, ?);`,
        [calculate_value, email, 0],
        function(error) {
            if (error) {
                console.log(error);
                res.send({
                    status:404,
                    message: 0
                });
            } 
                res.send({
                    status:200,
                    message: 1
                });
            
        }
    );
});

router.get(
    "/MasterGetAllUnCalculatedValues",
    Authorize.authenticateToken,
    (req, res) => {
        db.all(
            `SELECT * FROM Calculations where Evaluated='0'`,
            (error, rows) => {
                if (error) {
                    console.error(error.message);
                    res.sendStatus(404);
                } 
                res.send({
                        status:200,
                        message: rows
                    });
                
            }
        );
    }
);


router.get(
    "/MasterGetAllAnsweredValues",
    Authorize.authenticateToken,
    (req, res) => {
        db.all(
            `SELECT * FROM Calculations where Evaluated='1'`,
            (error, rows) => {
                if (error) {
                    console.log(error);
                    res.sendStatus(404);
                } 
                    
            res.send({
                        status:200,
                        message: rows
                    });
                
            }
        );
    }
);

router.get("/Masterall", (req, res) => {
    db.all("SELECT * FROM Calculations", (error, rows) => {
        if (error) {
            console.error(error.message);
        }
        res.send(rows);
    });
});

router.get("/MasterDeleteall", (req, res) => {
    db.all("Delete  FROM Calculations", (error, rows) => {
        if (error) {
            console.error(error.message);
        }
        res.send(rows);
    });
});

module.exports = router;
