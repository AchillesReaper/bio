import React from "react";
import './Navbar.css';

export default function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/bio">Home</a></li>
                <li><a href="/bio/academic">Academic</a></li>
                <li><a href="/bio/industrial">Industrial</a></li>
                <li><a href="/bio/projects">Projects</a></li>
            </ul>
        </nav>
    )
}