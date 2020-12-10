const MongoClient = require('mongodb').MongoClient, 
url = "mongodb://127.0.0.1:2701", 
name ="db-untar-cafe";


MongoClient.connect(url,(err,client)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Connecting!")
    }
    let db = client.db(name);
    db.collection("untar-cafe").find().toArray((error,data)=>{
        if(error) throw error;
        console.log(data);
    })
    db.collection("untar-cafe").insertOne({
        menu: "Earl Grey",
        desc: "Tea Earl Grey",
        price: 18000,
        isavilable : true
    }, (err,db)=>{
        if (err) throw error;
        console.log(db);
    })
    db.close
});
