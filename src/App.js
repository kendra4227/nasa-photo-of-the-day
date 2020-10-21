import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [date , setDate] = useState("");
  const [img, setImg] = useState("");
  const [ details, setDetails] = useState("");


  useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=VStpaWrZdU6vCt0bpdlazaMGTpGwDUF4CqtaiaZF`)
    .then(res => {
      const image = res.data;
      console.log(image);
      setImg(image.hdurl);
      setDate(image.date);
      setTitle(image.title);
      setDetails(image.details);
    })


  },[]);

  return (
    <div className="App">
      <h2>{date}</h2>
      <h2>{title}</h2>
      <img src = {img} alt ="potd"/>
      <p>{details}</p>
    </div>
  );
}

export default App;
