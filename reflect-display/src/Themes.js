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
        <button> <img className="" src="/themes/balance.png" /> </button>
        <button> <img className="" src="/themes/change.png" /> </button>
        <button> <img className="" src="/themes/confidence.png" /> </button>
        <button> <img className="" src="/themes/gratitude.png" /> </button>
        <button> <img className="" src="/themes/growth.png" /> </button>
        <button> <img className="" src="/themes/health.png" /> </button>
        <button> <img className="" src="/themes/strength.png" /> </button>
        <button> <img className="" src="/themes/truth.png" /> </button>
        <button> <img className="" src="/themes/patience.png" /> </button>
        <button> <img className="" src="/themes/presence.png" /> </button>
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
