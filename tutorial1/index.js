// import express lib
const express = require('express');
var bodyParser = require('body-parser')
// create webserver
const app = express();
const admin = express();

// parse body as json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    // res > to give answer to user
    // req > to get user requests
    // res.send("<h1>hello expresjs</h1>") // html tags are allowed
    res.json({
        articles: [{
            id: 1,
            title: "hello",
            body: 'lorem ipsum'
        }]
    })
})


app.post('/',(req,res)=>{
    console.log(req.query)
    console.log(req.body)
    res.json({
        userdata:req.body
    })
})


admin.get('/',(req,res)=>{
    res.send("<h1>This is admin</h1>")
})




app.listen(4000, () => {
    console.log('server is running');
})

admin.listen(4001,()=>{
    console.log("admin server is running")
})

