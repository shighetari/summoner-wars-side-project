import Axios from "axios";
import React, { useEffect, useState } from "react";

const Top100 = () => {
  const [top100, setTop100] = useState([])

  useEffect(() => {
    Axios.get('http://ratings-1v1-api.warselect.io/top100?season=1')
    .then(res => {
      console.log(res.data.data)
      setTop100(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })

  },[])

  
  return(
      <div>
          {top100.map(data=>{
            return (
              <div>
                Name: {data.name}
                <br/>
                Rating: {data.rating}
                <br/>
                -------------------
               
              </div>
            )
          })}
      </div>
  );
};

export default Top100
