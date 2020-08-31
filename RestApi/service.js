var express = require("express");
var app = express();
app.get("/login", (req, res) => {
    console.log(req.param('UserName'));
    console.log(req.param('Passw'));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //BU NOKTADA istenilen işlemler db bağlantısı ne şifreleme ne istenirse yapılabilir.
    if(req.param('UserName').toLowerCase()==='hasan'&req.param('Pass')==='1234')
    {
        res.json(["OK","Hasan","Emre","Kuşan","istanbul"]);
    }
    else{
        res.json(["NO","---","---","---","---"]);
    }
    
   });
   app.get("/product", (req, res) => {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
 
 res.end(JSON.stringify(
   [  {
    title:"Mouse",
    price:70,
    category:"YELLOW"
},
{
    title:"Kitap",
    price:10,
    category:"BLUE"
}
   ]
));
   });
        
app.listen(8888, () => {
 console.log("Server running on port 3000");
});