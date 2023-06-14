import React from "react";
import {Link} from 'react-router-dom'

export default function erreur404(){
    return(
        <div>
            <p className="erreur">erreur404</p>
            <p className="oups">Oups! La page que vous avez demandez n'existe pas</p>
            <Link to={`/`}>
            <p className="retour">Retour sur la page d'accueil</p>
            </Link>
        </div>
    )
}