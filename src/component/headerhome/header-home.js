import React from "react" 
import img from "./header-home.png"
import './headerhome.css'

function Headerhome() {
	return (
		<div className='header-box' >
			<img className="imgheaderhome" alt="" src={img}></img>
			<div className="text">Chez vous, partout et ailleurs</div>
		</div>
	)
}

export default Headerhome
