import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Creator } from './creator/creator';
import { Sheets } from './sheets/sheets';
import { Info } from './info/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
    <BrowserRouter className="router">
        <div className="text-light">
            <header className="container-fluid">
                <h1 className="librarytitle">
                    <p className="bigtitle">Pathfinder's Library</p>
                    <p className="username">Not Logged In!</p>
                </h1>
                <nav className="navbar fixed-middle">
                    <menu className="navbar nav">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/creator">Character Creator</NavLink>
                            <NavLink className="nav-link" to="/sheets">Community Sheets</NavLink>
                            <NavLink className="nav-link" to="/info">Info</NavLink>
                    </menu>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/login' element={<Login />} />
                    <Route path='/creator' element={<Creator />} />
                    <Route path='/sheets' element={<Sheets />} />
                    <Route path='/info' element={<Info />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <footer>
                <span className="name">Zachary Penney</span>
                    <NavLink to="https://github.com/Dehakin/pathfinder260.git" className="nav-link" >
                        GitHub Repository
                    </NavLink>
            </footer>
        </div>
    </BrowserRouter>

    );
}

function NotFound() {
    return <div>404: Return to sender. Address unknown!</div>
}

export default App;