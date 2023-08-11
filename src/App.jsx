
import "./index.css"
import { useEffect, useState } from "react";
import Converter from './components/converter/converter';
import Loader from "./components/converter/loader";


function App() {
  const [userCity, setUserCity] = useState('okara')
  const [Data, setData] = useState('')

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=326fa8888f373c10736610bf25d4add8`
  
  const fetchUrlData = async() => {

    try {
      const response = await fetch(url);
      let data = await response.json()
      setData(data)
    } catch (error) {
      console.log('Error: ', error)
    }

  }
  useEffect(() => {
    fetchUrlData() 
  },[userCity])
 
  const addCity = (e) => {
    e.preventDefault()
    setUserCity(e.target.value)
  }

  return (
    <> 
      {Data ? <Converter Data={Data} func={addCity}/> : <Loader/>}
    </>
  );
}

export default App;
 