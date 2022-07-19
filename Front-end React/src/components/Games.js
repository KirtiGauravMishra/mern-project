import React,{useContext} from "react";
import Navigation from "./Navigation";
import { AppContext } from "../context/Userdbcontext";
import { useGlobalContext } from "../context/Userdbcontext";
import { NavLink } from "react-router-dom";



const Games = () => {
    //const name =useContext(AppContext);
    const {games} =useGlobalContext();
    return (
        <div>
            {games.map((value,key)=>(
                <>
                
                <p>{value.title}</p>
                <p> {value.platform}</p>
                <p> {value.score}</p>
                 <p> {value.genre}</p>
                 <p> {value.editors_choice}</p>
                </>
            ))

            }
        </div>
    );
   
    }
  export default Games;
  