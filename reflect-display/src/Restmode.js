import './App.css';

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function RESTMODE(props) {
    return (
        <div>
            <RestWidget/>
            <Affirmations/>
            <Link to="checkin">
                <StartButton/>
            </Link>
        </div>
    )
}

export function RestWidget(props) {
  return (
      <div className='widget horz-flex'>
        <Time />
        <Weather />
        {/* <div id='theme'>
          monthly theme
            <div style={{ margin:"10px auto" }}><b style={{ fontSize:"35px" }}>balance</b></div>
        </div> */}
      </div>
  )
}

export function Affirmations(props) {
  const msg = "\"my baby can feel my peace.\"" 
  return (
      <div className="affirmation-frame hort-flex">
        <div className='affirmation-text'>
          {msg}
        </div>
      </div>
  )
}

// Components appeared in restmode of the mirror
export function StartButton(props) {
    return (
        <button className="start-btn-frame">
          <div className="start-btn-text">press anywhere on remote to start</div>
        </button>
    )
}

export function Time() {
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
      <div className='horx-flex'>
        {time.toLocaleDateString('en-US', dateOptions)}  {time.toLocaleString('en-US', timeOptions)}
      </div>
    );
  }

// Get the weather API
export function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'bf9dd0c1c9eaa101b363ce544816179b';
  const CITY = 'Seattle';

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [API_KEY, CITY]);

  return (
    <div>
      {weatherData && (
        <div>
          {weatherData.main.temp} °F
        </div>
      )}
    </div>
  );
}



//Currently not using
export function Settings(props) {
  return (
      <Link to="/settings">
          <div className="settings glassmorphism ">
              <span className="material-symbols-outlined hort-flex">settings</span>
          </div>
      </Link>
  )
}