import React from "react";
import './Navbar.css';

export default function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/academic">Academic</a></li>
                <li><a href="/industrial">Industrial</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    )
}