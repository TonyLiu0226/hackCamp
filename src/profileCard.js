import React from 'react'
import {useState, useEffect} from 'react';
import './profileCard.css';
import 'bulma/css/bulma.min.css';
function loginPage(props) {
    return(
        <div className="body">
            <div className="container">
                <div className="title">
                    <h1 class="title is-1 is-spaced has-text-white">UniMeetups 2</h1>
                    <h4 class="subtitle is-3 has-text-light">Reconnect with your fellow humans</h4>
                </div>
                <button class="button is-secondary has-text-dark">Login</button>
            </div>
        </div>
    )
}

export default profileCard;