import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';

const EnvContext = React.createContext();

export function useEnv() {
    return useContext(EnvContext)
}

export function EnvironmentContext({children}) {
   
    const [userPosition, setUserPosition] = useState({
        latitude: 49.98,
        longitude: 36.23
      });

    const [environmentProfile, setEnvironmentProfile] = useState()
      
      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
    
            let pos = {
              // latitude: position.coords.latitude,
              // longitude: position.coords.longitude
              latitude: 49.98,
              longitude: 36.23
            }
    
            setUserPosition(pos)
            async function getLocalWeather() {
              let response  = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${'82c3481d13c06ad82695fe57b23eb890'}`)
              let date = new Date();
              let hours = date.getHours();
              if (hours > 9 && hours < 20) {
                return setEnvironmentProfile([response.data.name, response.data.weather[0].id, 'day'])
              } else {
                return setEnvironmentProfile([response.data.name, response.data.weather[0].id, 'night'])
              }
            }
            getLocalWeather()
          })
        }
      }, []);

    return (
        <EnvContext.Provider value={environmentProfile}>
            {children}
        </EnvContext.Provider>
    )
}

// Axios.get(`http://api.weatherstack.com/current?access_key=debe3c0bf3f75514da96209088c04543&query=${userPosition.latitude},${userPosition.longitude}`).then(res => { 