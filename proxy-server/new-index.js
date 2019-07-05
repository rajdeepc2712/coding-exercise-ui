var express = require("express");
const axios = require("axios");
var cors = require("cors");



var app = express();
app.listen(3001,()=>{
console.log("Server running on port 3001");});

app.use(cors({origin: '*'}));
app.use(express.json());

app.post("/url", (req, res) => {

        console.log(req.body);

            axios.post('http://3.122.7.162:5000/v60/admin/session',
                {...req.body},
                {credentials:"include"})
                .then(response=>{
                    //this.setState({loading:false});
                    res.send(response.headers['set-cookie']);
                }).catch(error=>{
                    res.status(401).send(error);
                })
        });