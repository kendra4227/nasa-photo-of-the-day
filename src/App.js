import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([])
 /* const [title, setTitle] = useState("");
  const [date , setDate] = useState("");
  const [img, setImg] = useState("");
  const [ details, setDetails] = useState("");

*/
  useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-10-20`)
    .then(res => {
      console.log(res.data);
      setData(res.data);  
    })
    .catch(err => {
      console.log('err',err)
    })
  },[]);//dependency array

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <img src={data.url} alt = "potd" />
      <h3>{data.explanation}</h3>
    </div>
  );
}

export default App;
