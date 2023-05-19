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

function Carousel(props) {

    const [activeSlide, setActiveSlide] = useState(0);
    const [chosenTheme, setChosenTheme] = useState('gratitude');

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

    function ChooseThemeBalance(props) {
        setChosenTheme('balance');
    }

    function ChooseThemeChange(props) {
        setChosenTheme('change');
    }

    function ChooseThemeConfident(props) {
        setChosenTheme('confident');
    }


    function ChooseThemeGratitude(props) {
        setChosenTheme('gratitude');
    }

    function ChooseThemeGrowth(props) {
        setChosenTheme('growth');
    }

    function ChooseThemeHealth(props) {
        setChosenTheme('health');
    }


    function ChooseThemeStrength(props) {
        setChosenTheme('strength');
    }

    function ChooseThemeTruth(props) {
        setChosenTheme('truth');
    }

    function ChooseThemePatience(props) {
        setChosenTheme('patience');
    }
  
    return (
        <div className="carousel-container">
            <Slider {...settings} className="checkin-col">
                <div className="cards-col">
                    <Link to="/home"><button onClick={ChooseThemeBalance}> <img className="checkin-card" src="/themes/balance.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemeChange}> <img className="checkin-card" src="/themes/change.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemeConfident}> <img className="checkin-card" src="/themes/confidence.png" /> </button></Link>
                </div>

                <div className="cards-col">
                    <Link to="/home"><button onClick={ChooseThemeGratitude}> <img className="checkin-card" src="/themes/gratitude.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemeGrowth}> <img className="checkin-card" src="/themes/growth.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemeHealth}> <img className="checkin-card" src="/themes/health.png" /> </button></Link>
                </div>

                <div className="cards-col">    
                    <Link to="/home"><button onClick={ChooseThemeStrength}> <img className="checkin-card" src="/themes/strength.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemeTruth}> <img className="checkin-card" src="/themes/truth.png" /> </button></Link>
                    <Link to="/home"><button onClick={ChooseThemePatience}> <img className="checkin-card" src="/themes/patience.png" /> </button></Link>
                </div>
            </Slider>
        </div>
    );
}

