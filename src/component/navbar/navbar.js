import { logDOM } from "@testing-library/react"
import React from "react" 
import {Link} from "react-router-dom"
import './Navbar.css'
import logo from'./logo.png'

export default function Navbar(){
    return (
        <nav className="Navbar">
            <img className="logo" src={logo}></img>
            <div className="nav-box">
            <div className="accueil">
            <Link  to="/" style={{ all: 'unset' }}>Accueil</Link>
            </div>
            <div className="apropos">
            <Link  to="/apropos" style={{ all: 'unset' }}>A propos</Link>
            </div>
            </div>
        </nav>
    )
}