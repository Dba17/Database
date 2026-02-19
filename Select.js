import db from "./db.js";
import express from "express";
const app = express();

app.get("/list")

db.query("SELECT * FROM customers", (err, results)=>{
    if(err) throw err;
    console.table(results)
})