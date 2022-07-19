import React, { useState } from "react";
import axios from 'axios'
import "./App.css";
 
const EmailSending = () => {
  
  const [msg,setMsg] = useState('');
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: ""
  });
 //destructuring so that you dont have to use .(dot operator again to access the data)
  const { to, subject, description} = user;
  // (combining the data using ...user and the value in it )
  const onInputChange = e => {
    //passing it to our state setuser
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    //using post request to send the data to the endpoint user
    await axios.post("http://localhost:5000/users/",user)
   .then(response => setMsg(response.data.respMesg));
  };
  return (
    // our form with bootstrap classnames as design
    <div className="container">
         <h3 className="text-center text-success mb-2 mt-4"> Send Your Email to Anyone With Reactjs and Nodejs </h3>
         <h6 className =" text-center p-3 mb-2 bg-white text-dark">To Contact us Email us using below form at : kiirtigaurav1@gmail.com </h6> 
  
      <div class="row">  
      
       <div className="col-sm-4 mx-auto shadow p-5">
        <h4 className="text-center mb-2">Contact Us </h4>
           <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="To send Email Address"
              name="to"
              onChange={onInputChange}
              value={user.to}
            />
          </div>
          <div className="form-group  mb-4 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Email Address"
              name="youremail"
              onChange={onInputChange}
              value={user.youremail} // you can directly write data as its destructured or also use dot (.)
            />
          </div>

          <div className="form-group  mb-4 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Subject"
              name="subject"
              onChange={onInputChange}
              value={subject}
            />
          </div>
          <div className="form-group  mb-4">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              onChange={onInputChange}
              value={description}
            />
          </div>
          
          <button onClick={onSubmit} className="btn btn-primary btn-block " style={{marginLeft:"100px"}}>Send Mail</button>
       
      </div>
    </div>
  </div>  
  );
};
 
export default EmailSending;