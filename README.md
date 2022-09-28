# USE of SPOTIFY API
![Image](./images/Spotify_Developers.png)

## INDEX
>  1. [Description of the Project](#Description-of-the-Project)
>  2. [About Spotify's API](#About-Spotify's-API)
>  3. [Instalation](#Instalation)
>  4. [Usage](#Usage)
>  5. [Notes](#Notes)
>  6. [Creator and release date](#Developed-By:)

## Description of the Project
This project is a first test of how to use APIs, for this time we are using the Spotify API. 
To implement this Spotify API to your own projects you should follow the next steps.

> 1. Visit the ***[Spotify for Developers](https://developer.spotify.com/)*** web page.
> 2. Click in the Dashboard tab at the top of the page.
> 3. Log In using your Spotify Account. (You can also use other methods to Log In or Sign In)

## About Spotify's API
The spotify APIs and SDKs for JavaScript, iOS and Android, were created by Spotify to help you develop unique experiences for music fans all around the world with just a few lines of code.

Using this features you have access to...
 - Audio Features & Analysis: Explore audio features and in-depth audio analysis of tracks.
 - Playback: Bring music from Spotify to your application.
 - Recommendations: Customize and serve Spotify's powerfull recommendations to your users
 - Search: Find any track, artist, album or playlist on Spotify.
 - Metadata: Access information about any track, artist or album. **We will use this one for this application**.

---

## Instalation
> Materials:
> 1. Node.js
> 2. Postman

To install this repository correctly follow the next steps.

1. First of all, in the terminal put the next code to clone this repository:

```bash
    git clone https://github.com/Rafael-Anguiano/Spotify_API.git
    cd Spotify_API/
```

2. The next step is install the dependencies and node-modules.

```sh
    npm install
```

3. Once you have installed the dependencies, you are ready to start simulating and editing some code. To run this app run the next command in the terminal (Be sure you are in the correct directory).

```sh
    npm run dev
```
> **If the last command didn´t work, use the next command in your command prompt**

```sh
    node .\index.js
```

---

## Usage

>Remmember that you need to have the project running in the server.
```sh
    npm run dev
```

Here in the usage, we will find two different types of methods, the ***[GET Method](#GET-Methods)*** and the ***[POST Method](#POST-Methods)*** these are the two methods that we will use for our API, nevertheless the Spotify API have other methods as ***PUT Method*** and ***DELETE Method*** for their use.

To make correct use of this repository correctly, you need to follow some steps first.
 1. Get a TOKEN up to date. (For this you can visit the [Spotify Web Console](https://developer.spotify.com/console/), select a End Point and press "GET TOKEN")
 >If you are not able to get yours, or want to use mine, contact with me.

 2. Once we have the **TOKEN** let´s set this in our code, at the top of our [`index.js`](./index.js) code there is a constant called *token* and there is where we put our *token*.

 3. On ***Postman*** create a new *Workspace* and then a new *Request*.

 4. Once we have done the first 2 steps we are able to start doing some request in Postman. Bellow are the EndPoints I use for mi API.
 
|         |     Mine    |  Spotify's EndPoint | Method |
| :---   |    :----   |         :---       |  :---: |
| Base    | http://localhost:8080      | https://api.spotify.com/v1   | |
| Markets               | /markets            | /markets           | GET |
| Current User          | /currUser           | /me                | GET |
| Categories            | /Categories         | /browse/categories | GET |
| Genres                | /genres             | /recommendations/available-genre-seeds| GET |
| Featured Playlists    | /featured_playlists | /browse/featured-playlists| GET |
| Search                | /search             | /search            | POST |
| Tracks in a Playlist  | /tracks_of_playlists| /{playlist_id}/tracks     | POST |
| Image of a Playlist   | /playlist_image     | /playlists/{playlist_id}/images     | POST |
| Albums of an Artist   | /albums_of_Artist   | /artists/{id}/albums | POST |
| Profile               | /profile            | /users/{user_id} | POST |


## GET Methods
The **GET method** is the easiest one because we don´t need to send anything more than the request. We can check this request just following the EndPoints in the web browser. 

But for this project we will check all the End Points using *Postman*. For this, please follow the next steps:

 1. The Name of the request you can set it as you want.
 2. For the next step you need to set the ***type*** of the request (GET) and our *Base End Point* with his ***extension***.
 3. Press the button to send the request.

> Example of a GET request using axios

 ```Javascript
 app.get('/currUser', (req, res) =>{
    axios.get(`https://api.spotify.com/v1/me`)
        .then(function (response){
            console.log(response.data);
            res.send(response.data)
        })
})
 ```

## POST Methods
The ***POST Method*** is a little bit harder than a *GET Method*, because we need to send information for the request. That´s why we are using ***Postman*** in this project, to make easier to use a *POST request*.

 1. Is important to make a request of the parameters that we need, we can make a request of more than one parameter, in the next example is shown how to request two parameters (Artist and type).

 2. The Name of the request you can set it as you want.
 3. For the next step you need to set the ***type*** of the request (POST) and our *Base End Point* with his ***extension***.
 4. Next of this, we need to set the ***Body*** of our request, this time we are passing the parameters using a **JSON**, bellow is an example of this.
 5. Press the button to send the request.

>Example of the parameters passed in JSON
```JSON
{
    "Artist" : "Muse",
    "type": "track"
}
```
>Example of POST request
```Javascript
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
```

> 6. If the request doesn´t work, go to the Authorization tab in the request options and select ***OAuth2.0***, after this pass the **TOKEN** to Postman

---

## Notes:
 1. Running on port 8080
 2. To have a better performance with our ***POST Method*** don´t forget to use a `catch( )` function after our request. 
 3. For further information about how to pass the information in the ***POST Method*** check the ***[Endpoints](https://developer.spotify.com/console)***

---

## Developed By:
 Rafael de Jesús Anguiano Suárez del Real (August - September 2021)
