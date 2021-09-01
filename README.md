# USE of  SPOTIFY API
![Image](./images/Spotify_Developers.png)

## INDEX
>  1. [Description of the Project](#Description-of-the-Project)
>  2. [About Spotify's API](#About-Spotify's-API)
>  3. [Instalation](#Instalation)
>  4. [Usage](#Usage)
>  5. [Notes](#Notes)
>  6. [Creator and release date](#Developed-by:)

## Description of the Project
This project is a first test of how to use APIs, for this time we are using the Spotify API. 
To implement this Spotify API to your own projects you should follow the next steps.

> 1. Visit the ***[Spotify for Developers](https://developer.spotify.com/)*** web page.
> 2. Click in the Dashboard tab at the top of the page.
> 3. Log In using your Spotify Account. (You can also use other methods to Log In or Sign In)

## About Spotify's API
The spotify APIs and SDKs for JavaScript, iOS and Android, were created by Spotify to help you to develop unique experiences for music fans all around the world with just a few lines of code.

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

 2. On ***Postman*** create a new *Workspace* and then a new *Request*.

 3. Once we have done the first 2 steps we are able to start doing some request in Postman. Bellow are the EndPoints I use for mi API.
 
|         |     Mine    |  Spotify's EndPoint | Method |
| :---:   |    :----:   |         :---:       |  :---: |
| Base    | http://localhost:8080/      | https://api.spotify.com/v1   | |
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


## POST Methods


1. First of all you would need to have running this project in the developer server (If you don´t have the server running check how to do it in the [Instalation Section](#Instalation)).

2. Make the connections shown [above](#Circuits-Connections)

3. Once you have made the connections, you need to open the [Schrodinger-s-cat.ino](./Schrodinger-s-cat.ino) code in an **Arduino Simulator** or an **Arduino IDE** 
4. Upload the code to your Arduino and you would be ready to go.

> 5. You can *press* the **restart button** on your Arduino if you want, and it will start with his last state saved on the memory.
> 6. The state of the cat is shown in the ***Serial monitor*** 
---

## Notes:

1. In the serial monitor you can see some 0s and some 1 followed by a phrase
    - 0 means that the cat is staying where it is.
    - 1 means that the cat is changing its position.
    - The phrase tells you what the cat did, **salio** if the cat is going outside, **entro** if the cat is going inside the house. 

---

## Developed By:
 Rafael de Jesús Anguiano Suárez del Real (August - September 2021)