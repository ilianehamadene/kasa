import React from "react" 
import img from "./header-home.png"
import './headerhome.css'
import {Link} from "react-router-dom"
import '../navbar/Navbar.css'
import logo from'../navbar/logo.png'

function Headerhome() {
	return (
		<div>
		<div>
        <nav className="Navbar">
            <img className="logo" alt='' src={logo}></img>
            <div className="nav-box">
            <div className="accueil">
            <Link  to="/" style={{ all: 'unset' , textDecoration: 'underline'}}>Accueil</Link>
            </div>
            <div className="apropos">
            <Link  to="/apropos" style={{ all: 'unset',  }}>A Propos</Link>
            </div>
            </div>
        </nav>
		</div>
		<div className='header-box' >
			<img className="imgheaderhome" alt="" src={img}></img>
			<div className="text">Chez vous, partout et ailleurs</div>
		</div>
		</div>
	)
}

export default Headerhome
