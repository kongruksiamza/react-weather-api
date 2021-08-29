import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const name ="Bangkok"
  const apiKey="54b4eb78009eff9ad25aa26c716f17f8"
  const [city,setCity] = useState({})

  useEffect(()=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setCity(data)
    })
  },[])

  const convertTemp=(k)=>{
      return (k-273).toFixed()
  }
  return (
    <div className="App">
        <section>
            <div className="location">
                <h1 className="city">{city.name}</h1>
                <p className="state">{city.sys.country}</p>
            </div>
            <div className="card">
                <div className="weather">
                    <h1>{convertTemp(city.main.temp)}&deg;C</h1>
                    <small>สูงสุด : {convertTemp(city.main.temp_max)}&deg;C , ต่ำสุด : {convertTemp(city.main.temp_min)}&deg;C</small>
                </div>
                <div className="info">
                    <div className="status">{city.weather[0].main}</div>
                    <div className="humidity">ความชื้น = {city.main.humidity}</div>
                    <div className="wind">ความเร็วลม = {city.wind.speed}</div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
