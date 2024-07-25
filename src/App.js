import './App.css';
import React ,{useState} from 'react'
function App() {
  const [city,setcity]=useState('');
  const [forecast,setForecast]=useState([]);
  const submits=(e)=>{
e.preventDefault();
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=33a477731ca6873dd006af4506eba4db&units=metric`)
    .then(response => response.json())
    .then(data => {
      const dailyForecast = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
      setForecast(dailyForecast);
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
       < form onSubmit={submits}>
       <h3>ENTER THE CITY NAME</h3> <input type="text" value={city} onChange={(e)=>setcity(e.target.value)}></input><br></br>
        <input type="submit" value="submit"></input>
       </form>
      </header>
      <div className="arrangement">
        {forecast.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="card-title"></div>
              <h4>Day-{index + 1}: <h3>{data.main.temp}°C</h3></h4>
              <p>{data.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
