import React from 'react'
import Body from './Body'
import './Player.css'
import Sidebar from './Sidebar'
import Footer from './Footer'
function Player({spotify}) {
    return (
        <div classname="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            
            <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
 