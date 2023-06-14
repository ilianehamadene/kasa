import {useState} from 'react'





function Collapstest({props}) {
    
    const [btnState, setBtnState] = useState(false);
    function handleclick(){
        setBtnState(btnState => !btnState);
    }
    
    
    const [btnState1, setBtnState1] = useState(false);
    function handleclick1(){
        setBtnState1(btnState1 => !btnState1);
    }
   return(

       
       
       <div className="all-collaps">
       <div className="collaps">
       <div onClick={handleclick} className="btn">
       <h2>description</h2>
       <span>{btnState ? '-' : '+'}</span>
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
        
        <p>{item}</p>
        
        ))}
            </div>
    </div>
    </div>
        )
}


    export default Collapstest 