import React, {useState, useEffect} from "react";
import Card from './Card';
import axios from 'axios';


function CardList() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-10-22`)
        .then(res => {
          console.log(res.data);
          setData(res.data);  
        })
        .catch(err => {
          console.log('err',err)
        })
      },[])

      return (
        <div className='cards'>
            
            <Card title={data.title}
                date={data.date}
                img={data.url}
                explanation={data.explanation} />

        </div>
    )

}
export default CardList;