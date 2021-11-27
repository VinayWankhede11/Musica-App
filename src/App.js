import React,{useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi(); // allows us to communicate between our app and spotifywebapi

function App() {
  // useeffect runs a code based on given condition

  const [{user, token}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
            type: "SET_TOKEN",
            token: _token,
          });

      spotify.setAccessToken(_token);   //giving the spotify webapi the accesstoken generated for our app
      
      spotify.getMe().then(user => {      //getting info of the user
          dispatch({
            type: "SET_USER",
            user: user,
          });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcKOkaP3weVSI").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

    }
  }, []);


  return (
    <div className="app">
      {
        token?(<Player spotify={spotify}/>) : (<Login/>)     // it tells if we have token then it will load player page otherwise will load login page
      }
    </div>
  );
}

export default App;
