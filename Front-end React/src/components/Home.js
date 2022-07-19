import React,{useContext} from "react";
import Navigation from "./Navigation";
import { AppContext } from "../context/Userdbcontext";
import { useGlobalContext } from "../context/Userdbcontext";
import Games from "./Games";
import Apicall from "./Apicall";
import Searchbar from "./Searchbar";
import Particlebackground from "./Particlebackground";

const Home = () => {

  return (
    <>
    <Particlebackground />
  <Navigation />

<Apicall />

</>
  )
}
 
export default Home;
