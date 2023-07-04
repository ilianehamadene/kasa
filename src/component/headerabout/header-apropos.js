import React from "react" 
import img from "./header-apropos.png"
import '../headerhome/headerhome.css'
import {Link} from "react-router-dom"
import '../navbar/Navbar.css'
import logo from'../navbar/logo.png'

function Headerapropos() {
	return (
		<div>
		<div>
        <nav className="Navbar">
            <img className="logo" alt='' src={logo}></img>
            <div className="nav-box">
            <div className="accueil">
            <Link  to="/" style={{ all: 'unset' }}>Accueil</Link>
            </div>
            <div className="apropos">
            <Link  to="/apropos" style={{ all: 'unset', textDecoration: 'underline'  }}>A Propos</Link>
            </div>
            </div>
        </nav>
		</div>
		<div className='header-box' >
			<img className="imgheaderhome" alt="" src={img}></img>
		</div>
		</div>
	)
}

export default Headerapropos
