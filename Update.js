import db from "./db.js"

const sql = "UPDATE customers SET name = ? WHERE customer_id=? ";

db.query(sql, ["Samuel", 4], (err, results)=>{
    if (err){
        console.log("Error to Update", err)
        return;//if didn't work stop here 
    }
    console.log("Updated successfully row affected:", results.affectedRows)
})