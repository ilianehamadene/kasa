import React from "react";
import {Link} from 'react-router-dom'
import './erreur.css'

export default function erreur404(){
    return(
        <div>
            <div className="erreur">404</div>
            <p className="oups">Oups! La page que vous avez demandez n'existe pas</p>
            <Link to={`/`} className="retour-link">
            <p className="retour">Retour sur la page d'accueil</p>
            </Link>
        </div>
    )
}