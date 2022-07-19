import React from "react";
import { BigGradientText, CenterText } from "../Styles/Styles";
import Navigation from "../components/Navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EmailSending from "../EmailSending";

const Contact = () => {
  return (
    <>
    <Navigation />
     
    <EmailSending />
  

</>
   
  );
};

export default Contact;