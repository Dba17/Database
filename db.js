import mysql from "mysql2";

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",      
    database: "apr2024batch"  
});


db.connect(err => {
  if (err) {
    console.log("Connection failed:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

export default db;