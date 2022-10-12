import React,{useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';

const Players = () => {
    const[data,setData] = useState([]);

    useEffect(() => {
        axios("https://www.balldontlie.io/api/v1/players").then(
            (res) => {
                console.log(res.data.data);
                setData(res.data.data)
            }
        )
    }, []);


  return <div className='players-container'>
      {data.map((data) => (
          <div key={data.id} className="player-div">
              <h1>{data.first_name} {data.last_name}</h1>
            </div>
      ))}
  </div>;
};

export default Players