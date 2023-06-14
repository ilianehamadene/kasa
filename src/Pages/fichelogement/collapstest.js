
import '../fichelogement/collapstest.css'
import React, { useState } from "react" 





function CollapsMenu(props){
    

    const [btnState, setBtnState] = useState(false);
    function handleclick(){
        setBtnState(btnState => !btnState);
    }
   
    
    const [btnState1, setBtnState1] = useState(false);
    function handleclick1(){
        setBtnState1(btnState1 => !btnState1);
    }
   
    

   <div className="all-collaps">
    <div className="collaps">
        <div onClick={handleclick} className="btn">
            <h2>description</h2>
            <span className="rotate">{'>'}</span>
        </div>
    <div className={btnState ? 'active' : 'before'}>
                <div className="equipement">
                    {props.description}
                </div>
            </div>
    </div>
    <div className="collaps">
        <div onClick={handleclick1} className="btn">
            <h2>Equipements</h2>
            <span>{btnState1 ? '-' : '+'}</span>
        </div>
    <div className={btnState1 ? 'active' : 'before'}>
            {props.equipments.map((item)=>(
                <div className="equipement">
                    {item.equipments}
                </div>
           ))}
            </div>
    </div>
    </div>
}

export default CollapsMenu