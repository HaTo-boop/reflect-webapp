import { CardButton } from "../Buttons";
import '../App.css';

import { Link } from "react-router-dom"
import { useState } from 'react';


// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow, DisplayTheme, Skip } from "../Checkin";
import '../App';

// Components appeared in the daily checkin of the mirror

export function ChooseTheme(props) {
    return (
        <div>
            <DisplayTheme />
            <Ask/>
            <Carousel />
            <Skip />
        </div>
    )
}

function Ask(props) {
    return (
        <div className="theme-question-frame hort-flex">
            hello there, what would like to focus on this month?
        </div>
    )
}

function Carousel() {

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        rtl: false,
        vertical: false, 
        arrows: false,
        beforeChange: (current, next) => setActiveSlide(next), 
    };
  
    return (
        <div className="carousel-container">
            <Slider {...settings} className="checkin-col">
                <div className="cards-col">
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/balance.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/change.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/confidence.png" /> </button></Link>
                </div>

                <div className="cards-col">
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/gratitude.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/growth.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/health.png" /> </button></Link>
                </div>

                <div className="cards-col">    
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/strength.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/truth.png" /> </button></Link>
                    <Link to="/home"><button> <img className="checkin-card" src="/themes/patience.png" /> </button></Link>
                </div>
            </Slider>
        </div>
    );
}

