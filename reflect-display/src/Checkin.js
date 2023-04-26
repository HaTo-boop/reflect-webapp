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
            <RestWidget />
            <Greetings/>
            <Carousel />
            {/* <Cards>/ */}
            <Skip/>
        </div>
    )
}

function Greetings(props) {
    return (
        <div className="affirmation-frame hort-flex">
            <div className="affirmation-text">hello avery, how are you doing, really?</div>
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
        <button> <img className="checkin-card" src="/checkin/happy.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/inspired.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/focused.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/happy.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/inspired.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/focused.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/happy.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/inspired.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/focused.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/happy.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/inspired.png" /> </button>
        <button> <img className="checkin-card" src="/checkin/focused.png" /> </button>
      </Slider>
    );
  }
  
function Skip(props) {
    return (
        <Link to="/home">
            <button className="bottom-right-btn button-outer-frame">
                <div className="button-inner-frame">
                    <div className='button-text'>not now</div>
                </div>
            </button>
        </Link>
    )
}

/*
function Cards(props) {
    return (
        <div className="horz-flex checkin-row">
            <button>
                <img src="happy.png" />
            </button>

            <button>
                <img src="inspired.png" />
            </button>

            <button>
                <img src="focused.png" />
            </button>
        </div>
    )
}
*/

