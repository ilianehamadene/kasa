import React, {useState}from 'react'






function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideStyle = {
        width:'100%',
        height:'100%',
        borderRadius:'15px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage: `url(${slides[currentIndex]}`}
        const sliderStyle = {
            height:'100%',
           position: 'relative',
          }
    const leftArrow = {
        position:'absolute',
        top:'45%',
        left:'30px',
        fontSize:'80px',
        color:'white',
        cursor:'pointer'
    }
    const rightArrow = {
        position:'absolute',
        top:'45%',
        right:'30px',
        fontSize:'80px',
        color:'white',
        cursor:'pointer'
    }
    const numberImage = {
        position:'absolute',
        top:'85%',
        right:'50%',
        fontSize:'30px',
        color:'white',
        
    }
    const goToPrevious = () =>{
        const ifFirstSlide = currentIndex === 0
        const newIndex = ifFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () =>{
        const ifLastSlide = currentIndex === slides.length -1
        const newIndex = ifLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
        
    }
    
if (slides.length !==1 ){
    return(
        <div style={sliderStyle}>
            <div style={leftArrow} onClick={goToPrevious}>{'<'}</div>
            <div style={rightArrow} onClick={goToNext} >{'>'}</div>
            <div style={numberImage}>{currentIndex +1}/{slides.length}</div>
        <div style={slideStyle}></div>
        </div>
    )}
else {return(
    <div style={sliderStyle}>
        <div style={slideStyle}></div>
        </div>
)}
    

}

export default Carousel

	 