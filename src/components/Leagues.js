import React,{useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';

const Leagues = () => {
    const[data,setData] = useState([]);

    useEffect(() => {
        axios("https://www.balldontlie.io/api/v1/teams").then(
            (res) => {
                console.log(res.data.data);
                setData(res.data.data)
            }
        )
    }, []);


  return <div className='leagues-container'>
      {data.map((data) => (
          <div key={data.id} className="leagues-div">
              <h1>{data.full_name}</h1>
            </div>
      ))}
  </div>;
};

export default Leagues
