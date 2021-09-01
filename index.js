/**
 * Rafael de Jesús Anguiano Suárez del Real
 * 17/08/2021
 */
const token = 'BQDMiBC4jjesjRO3TGLq9dTxHe5bIErlSCRTehq3DJE_wk8YZ81WYx3kmB7UWwwVPWybjlX_xbW5am_6nfns-96Y5p6UXVw-JfkE79_R1R1jnFqDHEfYz9MV7ZzBi7EIWw8_Cw7aHt6N0Sq_';
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

//using packages

const app = express();

// Setting port for APP
let port = 8080;

//Middleware
app.use(express.json());
app.use(morgan('dev'));
// Definning notes

app.get('/', (req, res) =>{
    res.send("<h1> Hello Rafa! </h1>");
})

//Post por parametro de entrada
app.post('/search', (req, res) =>{
    const {Artist, type} = req.body;
    axios.get(`https://api.spotify.com/v1/search?q=${Artist}&type=${type}`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function (error){
            const {message} = error
            res.status(404).json({message})
        })
})

app.post('/tracks_of_playlist', (req, res) =>{
    const {playlist_id} = req.body;
    axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function (error){
            const {message} = error
            res.status(404).json({message})
        })
})

app.post('/playlist_image', (req, res) =>{
    const {playlist_id} = req.body;
    axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/images`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function (error){
            const {message} = error
            res.status(404).json({message})
        })
})

app.post('/albums_of_Artist', (req, res) =>{
    const {id} = req.body;
    axios.get(`https://api.spotify.com/v1/artists/${id}/albums`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function (error){
            const {message} = error
            res.status(404).json({message})
        })
})

app.post('/profile', (req, res) =>{
    if(!req.body.user_id){
        res.json("User not found")
        return;
    }
    const {user_id} = req.body;
        axios.get(`https://api.spotify.com/v1/users/${user_id}`)
            .then(function (response){
                //console.log(response.data);
                res.send(response.data)
            })
            .catch(function (error){
                const {message} = error
                res.status(404).json({message})
            })
})


app.get('/markets', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/markets`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})

app.get('/currUser', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/me`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})

app.get('/Categories', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/browse/categories`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})

app.get('/genres', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})

app.get('/featured_playlists', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/browse/featured-playlists`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})


// Listen server
app.listen(port, ()=>{
    console.log("Server running on port "+port);
})