import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="bg-dark text-light">
            <header className="container-fluid">
                <h1 className="librarytitle">
                    <p className="bigtitle">Pathfinder's Library</p>
                </h1>
                <nav className="navbar fixed-middle">
                    <menu className="navbar nav">
                            <a className="nav-link" href="index.html">Home</a>
                    </menu>
                </nav>
            </header>

            <main>Components go here</main>

            <footer>
            <span class="name">Zachary Penney</span>
            <a href="https://github.com/Dehakin/pathfinder260.git" class="nav-link" >GitHub Repository</a>
            </footer>
        </div>

    );
}