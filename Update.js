import db from "./db.js"

const sql = "UPDATE customers SET name = 'Mamush' WHERE customer_id=4 ";

db.query(sql, (err, results)=>{
    if (err){
        console.log("Error to Update", err)
        return;//if didn't work stop here 
    }
    console.log("Updated successfully row affected:", results.affectedRows)
})