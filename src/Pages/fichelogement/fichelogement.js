
import { useParams } from "react-router-dom";
import React, { useState } from "react" 
import { datakasa } from '../../Data/data';
import './fichelogement.css'
import Carousel from '../../component/carousel/carousel.js'
import Stars from "../../component/stars/stars";
import Collaps from "../../component/collaps/collapsunique";


const Fichelogement = () =>{
    let {fid} = useParams()

const picked = datakasa.find(({ id }) => id === fid);

const slidePics = picked.pictures;

const rate = picked.rating;
console.log(rate)


 return(
    <div>
     <div className="ove">    
     <Carousel slides={slidePics} />
    </div>
    <div className="info-principale">
    <div className="title-place">
        <div className="title">
            {picked.title}
        </div>
        <div className="place">
            {picked.location}
        </div>
        <div className="tags">
            {picked.tags.map((item)=>(
                <div className="tags-box">
                    <p>{item}</p>
                </div>
           ))}
            </div>
        </div>
    <div className="name-rate">
        <div className="name-img">
        <div className="name-host">
            {picked.host.name}
        </div>
        <img className="img-host" src={picked.host.picture} />
        </div>
        <div className="rate">
            <Stars props={rate}/>
        </div>
    </div>
    </div>
    <div>
    <Collaps props={picked}/>
    </div>
    </div>
    )
}

export default Fichelogement