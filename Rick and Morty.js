/**
 * Rafael de Jesús Anguiano Suárez del Real
 * 17/08/2021
 */

const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

//using packages

const app = express();

// Setting port for APP
let port = 8080;

//Middleware
app.use(express.json());
app.use(morgan('dev'));
// Definning notes

app.get('/', (req, res) =>{
    res.send("<h1> Hello Ivan! </h1>");
})

app.get('/rick', (req, res) =>{
    const END_POINT = 'https://rickandmortyapi.com/api/character';

    axios.get(END_POINT)
        .then(function (response){
            //console.log(response.data);
            res.send(response.data)
        })
})


app.post('/select-character', (req, res)=>{
    const {id} = req.body
    const END_POINT = "https://rickandmortyapi.com/api/character"
    console.log("ID: ", id);
    //This is the receiving obj of client
    //const {name, city} = req.body
    //console.log(name, city);
    console.log(`${END_POINT}/${id}`)
    axios.get(`${END_POINT}/${id}`)
        .then(function (response){
            res.send(response.data)
        })
        .catch(function (error){
            const {message} = error
            res.json({message})
        })

    //This is the sending obj to client
    /*res.json({
        your_name: name,
        your_city: city
    })*/
})

// Listen server
app.listen(port, ()=>{
    console.log("Server running on port "+port);
})