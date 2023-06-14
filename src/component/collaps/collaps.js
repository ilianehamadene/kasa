import { aboutArray } from '../../Data/aboutarray.js'
import React, { useState } from "react" 
import './collaps.css'

function Collaps () {


const [selected, setSelected] = useState(null)

const toggle = (i) =>{
    
    if (selected == i){
        return setSelected(null)
    }
    setSelected(i)
}


    return (
            <div className='accordeon'>
                {aboutArray.map((item, i)=>(
                    <div className='item'>
                        <div className='item-title' onClick={()=> toggle(i)}>
                            <p className='categories'>{item.aboutTitle}</p>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'item-content-show' : 'item-content'}>
                         <div className='content-style'>{item.aboutText}</div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default Collaps