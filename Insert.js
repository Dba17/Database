import db  from "./db.js";

function insertData(customerName, customerAddress, customerCompany){
    const sqlCustomer = "INSERT INTO customers(name) VALUES(?)";
    const sqlAddress = "INSERT INTO address(address, customer_id) VALUES(?,?)";
    const sqlCompany =  "INSERT INTO company(company,customer_id) VALUES(?,?)";
    //INSERT INTO customers TABLE
    db.query(sqlCustomer, [customerName], (err, result)=>{
        if(err) throw err;
        const customerId = result.insertId
        console.log("Customer inserted with ID:", customerId);
        //INSERT INTO address TABLE
        db.query(sqlAddress,[customerAddress, customerId], (err, result)=>{
            if(err) throw err;
            console.log("Address data inserted for customer ID:", customerId);

            //INSERT INTO company TABLE
            db.query(sqlCompany, [customerCompany, customerId], (err, result)=>{
                if (err) throw err;
                console.log("Company inserted for customer ID", customerId)
            });
        });
    });
}

insertData("Eshetu", "AA", "Private")