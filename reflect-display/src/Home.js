import { CardButton } from "./Buttons"
import { Widget } from "./Widget"
import { Affirmations, RestWidget, Settings } from "./Restmode"
import React, { useState, Component } from "react";
import './App.css';


import { Link } from 'react-router-dom';

export function HOME(props) {
    return (
        <div>
            <div className='affirmation-label'>daily affirmation</div>
            <Affirmations/>
            <RestWidget/>
            {/* <Settings/> */}
            <Features/>
            <Exit/>
        </div>
    )
}

export function Features(props) {
    return (
        <div className="home-feature-frame">
            
            <button> 
                {/* <img className='home-ring' src="home_ring.png" /> */}
                <ImageComponent />

                <Link to="/themes">
                    <button className="home-intention-frame">
                        <div className="home-intention-label">monthly intention</div>
                        <div className="home-intention-text">gratitude</div>
                    </button>
                </Link>

                <Link to="/breathing">
                    <button className="home-breathing-position">
                        <div className="pink-btn-outer-frame">
                            <div className="pink-btn-inner-frame">
                                <div className='pink-btn-content'>
                                    <img className="feature-logo" src="breathing_logo.png" alt="breathing exercise" />
                                    <div className="feature-title">breathing exercise</div>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link> 

                <Link to="/reflection">
                    <button className="home-reflection-position">
                        <div className="pink-btn-outer-frame">
                            <div className="pink-btn-inner-frame">
                                <div className='pink-btn-content'>
                                    <img className="feature-logo" src="reflection_logo.png" alt="breathing exercise" />
                                    <div className="feature-title">reflection time</div>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>

                <Link to="/therapy">
                    <button className="home-therapy-position">
                        <div className="pink-btn-outer-frame">
                            <div className="pink-btn-inner-frame">
                                <div className='pink-btn-content'>
                                    <img className="feature-logo" src="reflection_logo.png" alt="breathing exercise" />
                                    <div className="feature-title">exposure therapy</div>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>

            </button> 
            
        </div>
    )
}

export function Exit(props) {
    return (
        <Link to="/">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>sleep</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>   
    )
}

class ImageComponent extends Component {
    state = {
      currentImage: 'home_ring.png',
    };
  
    handleImageChange = () => {
      this.setState({ currentImage: "home_ring_hover.png" });
    };

    handleImageLeave = () => {
        this.setState({ currentImage: "home_ring.png" });
      };
  
    render() {
      const { currentImage } = this.state;
  
      return (
            <button 
            onMouseEnter={this.handleImageChange} 
            onMouseLeave={this.handleImageLeave}>
                <img className="home-ring" src={currentImage} alt="Current Image" />
            </button>
      );
    }
  }
  
  export default ImageComponent;

/* Old exit button, link back to the home page
export function Exit(props) {
    return (
        <Link to="/home">
            <div className="exit glassmorphism">
                <span className="material-symbols-outlined hort-flex">logout</span>
            </div>
        </Link>
    )
}

// Old features layout
export function Features(props) {
    return (
        <div className="feature-col vert-flex">
            <Link to="/reflection">
                <button className="feature-button">
                    reflection time
                </button>
            </Link>

            <Link to="/therapy">
                <button className="feature-button">
                    exposure therapy
                </button>
            </Link>      
            
            <Link to="/breathing">
                <button className="feature-button">
                    breathing exercise
                </button>
            </Link> 

        </div>
    )
}

*/


