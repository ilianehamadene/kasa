import {useState} from 'react'
import Up from './Up.svg'
import Down from './Down.svg'

function Collaps({props, title}) {
    
    const [btnState, setBtnState] = useState(false);
    function handleclick(){
        setBtnState(btnState => !btnState);
    }
    
   return(

    <div className="collapsbig">
        <div onClick={handleclick} className="btnbig">
            <p className='collaps-title'>{title}</p>
            <span className='collaps-title'>{btnState ? <img className='arrow-collaps' alt='' src={Down}/> : <img className='arrow-collaps' alt="" src={Up}/>}</span>
        </div>
    <div className={btnState ? 'activebig' : 'before'}>
    {props.map((item)=>(
        
        <p className='equipementbig' key={item}>{item} </p>
        
        ))}
            </div>
    </div>
        )
}

    export default Collaps