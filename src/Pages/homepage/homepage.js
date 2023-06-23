import React from "react";
import { datakasa } from '../../Data/data'
import './homepage.css'
import {Link} from 'react-router-dom'


function Card ({title, picture}) {
    return (
        <div className="card">
        <img className="imgcards" alt="" src={picture}/>
        <div className="title-cards">
            {title}
        </div>
        </div>
    )
}

function Homepage() {
    return (
    
        <div className="cards-holder" style={{ display: 'flex'}} >
            
            {datakasa.map((appart, id) => (
                <div key={id}>
                <Link className="link_card_logement" to={`/fichelogement/${appart.id}`}>
                <Card
                    picture={appart.cover}
                    title={appart.title}
                />
                </Link>
                </div>
            ))}
        </div>
    )
}
export default Homepage 