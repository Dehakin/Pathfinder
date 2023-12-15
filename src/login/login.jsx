import React from 'react';
import './login.css';

export function Login() {
    return (
        <div>
            <h2>Welcome to the Pathfinder's Library!</h2>
            <p className="description">Pathfinder's Library is an easy-to-use tool that allows you to design your own characters for your next TTRPG game!</p>
            <p className="description">Log in to get started, or click "Information" to learn more!</p>
            <form method="get">
                <label className="instructions" htmlFor="name">Enter your credentials:</label>
                <br />
                <input type="text" className="usernameinput" placeholder="username here" />
                <input type="text" className="passwordinput" placeholder="password here" />
                <button className="loginbutton" type="button">Login</button>
                <button className="createbutton" type="button">Create</button>
            </form>
            <div id="messageLog"> </div>
            <div id="message"></div>
        </div>
    );
}