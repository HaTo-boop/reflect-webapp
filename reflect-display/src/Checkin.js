import './App.css';

import { Link } from "react-router-dom"
import { RestWidget } from './Restmode';

// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components appeared in the daily checkin of the mirror

export function CHECKIN(props) {
    return (
        <div>
            <DisplayTheme />
            <Greetings/>
            <Carousel />
            <Skip/>
        </div>
    )
}

export function DisplayTheme(){
    return (
        <div className="theme-widget hort-flex">
            <div className="theme-widget-label">monthly intention:</div>
            <div className="theme-frame">
                <div className="theme-text">gratitude</div>
            </div>
        </div>
    )
}

function Greetings(props) {
    return (
        <div className="check-in-question-frame">
            <div className="check-in-question-text">how are you doing? <br />really</div>
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
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/happy.png" /></button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/inspired.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/focused.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/calm.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/fulfilled.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/grateful.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/anxious.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/frustrated.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/fearful.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/sad.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/exhausted.png" /> </button></Link>
        <Link to="/home"><button> <img className="checkin-card" src="/checkin/confused.png" /> </button></Link>
      </Slider>
    );
  }
  
export function Skip(props) {
    return (
        <Link to="/home">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>not now</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
    )
}