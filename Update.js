import db from "./db.js"

// let make function which update values
function updateCustomer(newName, id){
    const sql = "UPDATE customers SET name = ? WHERE customer_id=? ";

    db.query(sql, [newName, id], (err, results)=>{   
        if (err){
            console.log("Error to Update", err)
            return; //if err stop here 
        }
        console.log("Updated successfully row affected:", results.affectedRows)
    })
}

updateCustomer("Felecity", 4)
updateCustomer("Netsanet", 6)