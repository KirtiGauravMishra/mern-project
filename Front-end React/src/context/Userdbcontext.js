import React, { useState,useContext, useEffect } from 'react'

// creating context
const API_URL= `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`;

const AppContext=React.createContext();

// provider bana lo
const AppProvider=({children})=>{
const [isLoading,setLoading]=useState(true);
const [games,setGames] = useState([]);
const[iserror,setIsError] =useState({show:"false",msg: "Bhago Bhago, Error aaya ! "})

    //creating your getgames function to pass in useffect
const getgames= async(url)=>{
    //fetch method se fetch the url data in json format
    try {
    const res = await fetch(url);
    const data =await res.json(); // did not write res.json() kyonki data is already in json format
    console.log(data);
    if (data.Response==="True"){
    setLoading(false);
    setGames(data.search);
    }
    else{
        setIsError({
            show:true,
            msg:data.error,
        })
    }
    }
    catch(error){
   console.log (error);
    }
};
// usinf useeffect to pass the api
useEffect(()=>{
    getgames(API_URL);
},[])

    return <AppContext.Provider value ={{isLoading,iserror,games}}>{children}</AppContext.Provider>
};

//global custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export  { AppContext, AppProvider, useGlobalContext};