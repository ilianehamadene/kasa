import React from 'react'
import StarsFull from './star-rate.svg'
import StarsEmpty from './emptyStar.svg'
import '../../Pages/fichelogement/fichelogement.css'



function Stars({props}){
if (props === '0'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
        </div>
    )
}
if (props === '1'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
        </div>
    )
}
if (props === '2'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
        </div>
    )
}
if (props === '3'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
        </div>
    )
}
if (props === '4'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsEmpty}/>
        </div>
    )
}
if (props === '5'){
    return (
        <div>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
            <img className='stars-size' alt='' src={StarsFull}/>
        </div>
    )
}       
    <div>

    </div>
}
export default Stars