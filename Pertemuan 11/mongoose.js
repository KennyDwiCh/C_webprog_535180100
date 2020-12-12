const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    {useNewUrlParser : true}
);
const db = mongoose.connection;
db.once("open",()=>{
    console.log("Succses connecting")
});

const schema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
})
const member = mongoose.model("Member",schema);
var member1 = new member({
    name:"Space final",
    email:"www.okoo.com"
});
member1.save((error,savedDocument)=>{
    if (error)console.log(error);
    console.log(savedDocument);
});
member.create(
    {
        name:"Star SHiP",
        email:"Yada Yada.com",
        credit:105231
    },
    function(error,savedDocument){
        if (error)console.log(error);
        console.log(savedDocument);
    }
);
var findonequery = member.findOne({ name: "Star SHiP"})
findonequery.exec((err,data)=>{
    if (data) console.log("Find one: " + JSON.stringify(data));
});
member.find({nama:"Star SHiP"}).exec((err,data)=>{
    if(data) console.log("Find: " + JSON.stringify(data));
});
member.where({nama:"Star SHiP"}).exec((err,data)=>{
    if(data) console.log("Where: " + JSON.stringify(data));
});
member.updateOne({nama:"Star SHiP"},{credit:3000}).exec((err,data)=>{
    member.findOne({nama:"Star SHiP"}).exec((err,data)=>{
    if(data) console.log("Find: " + JSON.stringify(data));
    });
});
member.deleteMany({nama:"Star SHiP"}).exec((err,data)=>{
    member.findOne({nama:"Star SHiP"}).exec((err,data)=>{
        if(data) console.log("Find: " + JSON.stringify(data));
        });
});