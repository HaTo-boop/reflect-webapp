import { CardButton } from "../Buttons";
import '../App.css';

import { Link } from "react-router-dom"

// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DisplayTheme, Skip } from "../Checkin";

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
        <div className="affirmation-frame hort-flex">
            hello there, what would like to focus on this month?
        </div>
    )
}

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true
    };
  
    return (
      <Slider {...settings} className="checkin-col">
        <Link to="/home"><button> <img className="checkin-card" src="/themes/balance.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/change.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/confidence.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/gratitude.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/growth.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/health.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/strength.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/truth.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/themes/patience.png" /> </button></Link>
      </Slider>
    );
}

