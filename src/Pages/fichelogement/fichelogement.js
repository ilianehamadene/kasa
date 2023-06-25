
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react" 
import { datakasa } from '../../Data/data';
import './fichelogement.css'
import Carousel from '../../component/carousel/carousel.js'
import Stars from "../../component/stars/stars";
import Collaps from "../../component/collaps/collapsunique";


const Fichelogement = () =>{ 
    const navigate = useNavigate();
    let {fid} = useParams()

    useEffect(() => {
        window.scrollTo(0,0);
        const picked = datakasa.find(({ id }) => id === fid);
        if (!picked) {
            navigate("/erreur404");
        }
    },[]);

    try {
        const picked = datakasa.find(({ id }) => id === fid);
        const slidePics = picked.pictures;
        const rate = picked.rating;
        return(
            <div>
            <div className="ove top">    
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
                        <div className="tags-box" key={item}>
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
                <img className="img-host" alt="" src={picked.host.picture} />
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
    } catch (e) {
        console.error("L'id est incorrect")
    }
}

export default Fichelogement