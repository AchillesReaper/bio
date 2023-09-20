import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav id="navbar">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/academic">Academic</Link> </li>
                <li> <Link to="/industrial">Industrial</Link> </li>
                <li> <Link to="/projects">Projects</Link> </li>
            </ul>
        </nav>
    )
}
