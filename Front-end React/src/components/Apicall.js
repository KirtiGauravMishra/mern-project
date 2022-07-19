import React, { useEffect, useState } from "react";
import "./Api.css";
import {card} from 'react-bootstrap';
import Searchbar from "./Searchbar";

function Apicall()
{
    const[apiData,setApiData]=useState([]);
    

    const callApi =()=>{
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
        .then((response)=>response.json())
        .then((data)=>setApiData(data))
        .catch((error)=>console.log("Please try another api"));
    };

    useEffect(
        ()=>
        {
            callApi();
        }
    );
    return (
        <div className="abc">
             <h2>API Data : </h2>
           <center><Searchbar /></center>  
            {apiData.map((value,key)=>(
<div className = "Radha" class ="card">
<div class="card bg-light mb-3" >
<div class="card-body ">
 
   
              <p>Title: {value.title}</p>
            <p> Platform:  {value.platform}</p>      
                <p> Score:  {value.score}</p>
                 <p> Genre: {value.genre}</p>
                 <p> Editor's Choice:  {value.editors_choice}</p>
 </div>
               
</div>
</div>
  
                
        
             
            )
            )

            }
        </div>
    );
}

  export default Apicall;
  