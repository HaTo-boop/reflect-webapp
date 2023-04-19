import './App.css';

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export function RESTMODE(props) {
    return (
        <div>
            <RestWidget/>
            <Affirmations/>

            <Link to="checkin">
                <OkButton/>
            </Link>
            
            <Settings/>
        </div>
    )
}

// Components appeared in restmode of the mirror
export function OkButton(props) {
    return (
        <button className="okButton glassmorphism">
            click<span id="ok"> ok </span>to start
        </button>
    )
}

export function Settings(props) {
    return (
        <Link to="/settings">
            <div className="settings glassmorphism ">
                <span className="material-symbols-outlined hort-flex">settings</span>
            </div>
        </Link>
    )
}

export function Affirmations(props) {
    const msg = "My baby can feel my peace." 
    return (
        <div className="affirmation glassmorphism hort-flex">
            {msg}
        </div>
    )
}

export function RestWidget(props) {
    return (
        <div id='rest-widget' className='widget glassmorphism vert-flex'>
            {/* <Clock/> */}
            <Time />
            <Weather/>
            <div id='theme'>
                monthly theme
                {/* <CardButton imgSrc="/public/balance_theme.png" content="balance"/> */}
                <div style={{ margin:"10px auto" }}><b style={{ fontSize:"35px" }}>balance</b></div>
            </div>
        </div>
    )
}

function Time() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    const dateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
  
    return (
      <div>
        <p>{time.toLocaleString('en-US', timeOptions)}</p>
        <p>{time.toLocaleDateString('en-US', dateOptions)}</p>
      </div>
    );
  }
  
  function Weather() {
    // const [temperature, setTemperature] = useState(null);
    // componentDidMount() {
    //     const API_KEY = 'a0a00327131618a6c859378f3f0dfeb2';
    //     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
    // }
  
    // useEffect(() => {
    //   const URL = `https://api.openweathermap.org/data/`;
  
    //   fetch(URL)
    //     .then(response => response.json())
    //     .then(data => {
    //       const tempF = data.hourly.temperature_2m[0].value * 1.8 + 32; // convert to Fahrenheit
    //       setTemperature(tempF);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching temperature:', error);
    //     });
    // }, []);
  
    return (
      <div>
        <h1>weather</h1>
        {/* {temperature !== null && <p>{temperature}°F</p>} */}
      </div>
    );
}

/*
function Clock(props) {
//API
return(
    <div className="clock">
        <p id="time"> 10:00 </p> 
        <p id="date"> friday, march 2 </p>
    </div>
)
}

function Weather(props) {
    //API
    return (
        <div id="weather">
            Weather
        </div>
    )
}

*/