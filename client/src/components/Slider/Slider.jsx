import React,{ useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss"


const PhotoSlider= () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/2528001/pexels-photo-2528001.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2315309/pexels-photo-2315309.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1835714/pexels-photo-1835714.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


    return(
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
}

export default PhotoSlider