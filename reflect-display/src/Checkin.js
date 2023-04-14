import { CardButton } from "./Buttons"
import './App.css';

import { Link } from "react-router-dom"

// Carousel 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components appeared in the daily checkin of the mirror

export function CHECKIN(props) {
    return (
        <div>
            <Greetings/>
            <Carousel />
            {/* <Cards>/ */}
            <Skip/>
        </div>
    )
}

function Greetings(props) {
    return (
        <div className="affirmation glassmorphism hort-flex">
            hello avery, how are you doing, really?
        </div>
    )
}

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        <button>
            <img src="happy.png" />
        </button>

        <button>
            <img src="inspired.png" />
        </button>

        <button>
            <img src="focused.png" />
        </button>

        <button>
            <img src="happy.png" />
        </button>
      </Slider>
    );
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

function Skip(props) {
    return (
        <Link to="/home">
            <button id="skip-button" className="glassmorphism">
                i'll tell you later
            </button>
        </Link>
    )
}