import React from "react";
import Collaps from "../../component/collaps/collaps"
import { aboutArray } from '../../Data/aboutarray.js'
import '../apropos/apropos.css'



const collaps1 = aboutArray[0] ; 
const collaps2 = aboutArray[1] ; 
const collaps3 = aboutArray[2] ; 
const collaps4 = aboutArray[3] ; 



export default function Apropos(){
    return(
        <div className="back">
            <Collaps props={[collaps1.aboutText]} title={[collaps1.aboutTitle]}/>
            <Collaps props={[collaps2.aboutText]} title={[collaps2.aboutTitle]}/>
            <Collaps props={[collaps3.aboutText]} title={[collaps3.aboutTitle]}/>
            <Collaps props={[collaps4.aboutText]} title={[collaps4.aboutTitle]}/>
        </div>
    )
}