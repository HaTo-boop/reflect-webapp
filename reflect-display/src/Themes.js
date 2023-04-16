import { CardButton } from "./Buttons"
import './App.css';

import { Link } from "react-router-dom"

// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components appeared in the daily checkin of the mirror

export function Themes(props) {
    return (
        <div>
            <Ask/>
            <Carousel />
            <Skip />
        </div>
    )
}

function Ask(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            what would like to change your monthly theme to?
        </div>
    )
}

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  
    return (
      <Slider {...settings} className="horz-flex checkin-row">
        <button> <img className="glassmorphism" src="/checkin/happy.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/inspired.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/focused.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/happy.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/inspired.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/focused.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/happy.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/inspired.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/focused.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/happy.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/inspired.png" /> </button>
        <button> <img className="glassmorphism" src="/checkin/focused.png" /> </button>

      </Slider>
    );
}

function Skip(props) {
    return (
        <Link to="/settings">
            <button id="skip-button" className="glassmorphism">
                i'll change it later
            </button>
        </Link>
    )
}
