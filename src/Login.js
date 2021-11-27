import React from 'react'
import "./App.css"
import './Login.css'
import { loginUrl } from './spotify'


function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {/* Spotify logo */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            {/* Spotify login button */}
        </div>
    )
}

export default Login
