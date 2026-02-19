import db from "./db.js";

db.query("SELECT * FROM customers", (err, results)=>{
    if(err) throw err;
    console.table(results)
})