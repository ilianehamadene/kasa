import {useState} from 'react'
import Up from './Up.svg'
import Down from './Down.svg'




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
       <p className='collaps-title'>Description</p>
       <span className='collaps-title'>{btnState ? <img className='arrow-collaps' alt='' src={Down}/>: <img className='arrow-collaps' alt='' src={Up}/>}</span>
       </div>
       <div className={btnState ? 'active' : 'before'}>
                <div className="equipement">
                    {props.description}
                </div>
            </div>
    </div>
    <div className="collaps">
        <div onClick={handleclick1} className="btn">
            <p className='collaps-title'>Equipements</p>
            <span className='collaps-title'>{btnState1 ? <img className='arrow-collaps' alt='' src={Down}/> : <img className='arrow-collaps' alt="" src={Up}/>}</span>
        </div>
    <div className={btnState1 ? 'active' : 'before'}>
    {props.equipments.map((item)=>(
        
        <p className='equipement' key={item}>{item} </p>
        
        ))}
            </div>
    </div>
    </div>
        )
}


    export default Collapstest 