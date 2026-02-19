import db from "../db.js";
import express from "express";

const app = express();
app.use(express.urlencoded({extended: true}));


app.post("/add", (req, res)=>{
    const {name, address, company}= req.body;

    // Prevent null / empty values
    //but take spaces as value so it is not enough

    // if (!name || !address || !company) {
    //     return res.status(400).send("❌ All fields are required");
    // }


    //also I can prevent it on html by using required
    //but it can be bypassed

    // const nameTrim = name.trim();
    // const addressTrim = address.trim();
    // const companyTrim = company.trim();

    //simpler way
    if (!name.trim() || !address.trim() || !company.trim()) {
        return res.status(400).send("❌ Fields cannot be empty");
    }


    const sqlCustomer = "INSERT INTO customers(name) VALUES(?)";
    const sqlAddress = "INSERT INTO address(address, customer_id) VALUES(?,?) ";
    const sqlCompany = "INSERT INTO company(company, customer_id) VALUES(?,?) ";

    db.query(sqlCustomer, [name], (err,results)=>{
        if (err){
            console.log("Error to add address");
            return;
        }
        const customerID = results.insertId;

        db.query(sqlAddress, [address, customerID], (err)=>{
            if (err){
                console.log("Error to add address");
                return;
            } 

            db.query(sqlCompany, [company, customerID], (err)=>{
                if (err){ 
                    console.log("Error to add company");
                    return;
                }

                res.send("Successfully Inserted")
            });
        });
    });
});

app.get("/list", (req,res)=>{
    const sql = `SELECT* FROM customers`;
    db.query(sql, (err, results)=>{
        if(err){
            console.log("Erroe to show list");
            return;
        }
        console.log("Listed successfully")
        res.send(results);
    })
})


app.listen(3000, ()=>{
    console.log("app is runing at http://localhost:3000")
})
