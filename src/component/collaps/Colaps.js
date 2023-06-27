import {useState} from 'react'
import Up from './Up.svg'
import Down from './Down.svg'

function Colaps({props, title}) {
    
    const [btnState, setBtnState] = useState(false);
    function handleclick(){
        setBtnState(btnState => !btnState);
    }
    
   return(

    <div className="collaps">
        <div onClick={handleclick} className="btn">
            <p className='collaps-title'>{title}</p>
            <span className='collaps-title'>{btnState ? <img className='arrow-collaps' alt='' src={Down}/> : <img className='arrow-collaps' alt="" src={Up}/>}</span>
        </div>
    <div className={btnState ? 'active' : 'before'}>
    {props.map((item)=>(
        
        <p className='equipement' key={item}>{item} </p>
        
        ))}
            </div>
    </div>
        )
}

    export default Colaps