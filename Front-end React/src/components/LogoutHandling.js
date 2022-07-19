import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Particlebackground from './Particlebackground';

const LogoutHandling = () => {

    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
   <>
   <Particlebackground />

<div className="p-4 box mt-3 text-center">
        Tussi jaa rhe ho ! 😔😔 <br />
        {user && user.email}
      </div>
      <center> 
      <div className= "btn btn-primary btn-lg btn-block">
    
      <Button type="button" onClick={handleLogout}>
          Log out 
        </Button>
        
      </div>
      </center>
   </>
  )
}

export default LogoutHandling;