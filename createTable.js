import db from "./db.js"

function createTable() {

    const customers = `CREATE TABLE IF NOT EXISTS customers(
      customer_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) 
    )`;
    
    const address = `CREATE TABLE IF NOT EXISTS address (
      address_id INT AUTO_INCREMENT PRIMARY KEY,
      address VARCHAR(100),
      customer_id INT,
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    )`;
    
    const company = `CREATE TABLE IF NOT EXISTS company (
      company_id INT AUTO_INCREMENT PRIMARY KEY,
      company VARCHAR(100),
      customer_id INT,
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
      
    )`;

    db.query(customers, (err, result) => {
        if (err) throw err;
        console.log("Customer table created!");
        // if tbales are dependent one another
        // MySQL is asynchronous 
        // we must control the order of exection
        // to control order nest them one inside other
        db.query(address,err=>{
            if(err) throw err;
            console.log("Address table is created")
            
            db.query(company, err=>{
                if(err) throw err;
                console.log("company table created")
            })
        })
    });


}
// createTable();
// to prevent exection
export default createTable