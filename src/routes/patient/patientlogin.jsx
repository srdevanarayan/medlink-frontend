import React, { useState } from 'react';
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const inputStyle = {
  fontFamily: `"Littera Plain", sans-serif`,
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "white",
  background: "rgba(10, 10, 10, 0.43)",
};

const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

const label = {
  width: "90%",
  fontSize: "1.1em",
  borderRadius:"2em",
  border: " 3px solid #10B3A0",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};



const submitButtonStyle = {
  width:"30%",
  backgroundColor:"rgba(10, 10 , 10, 0.43)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '800',
  fontStyle: 'normal',
  padding:"1em"
};

function PatientLogin() {
  const [privateKey, setPrivateKey] = useState('');
  const [name,setName]=useState("");

  function Login(){

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // private key backend logic
    console.log(privateKey);
  };

  const handleChange = (e) => {
    setPrivateKey(e.target.value);
  };

  return (
    <div style={{gap:"2em", margin:"5% 30%"}}>

    <Card className='column-center'  style={{gap:"2em",border:"1px solid #17EFF4", borderRadius:"2em"}}>
    <div><h2 style={textColor}>Patient Login</h2></div>
    
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Username</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Password</label>
          </div>
        <Label
          placeholderStyle="label"
          type="password"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setPrivateKey(event.target.value)
          }}
        /></div>
    
    
          <div style={{display:"flex",justifyContent:"center"}}>
            <CardButton style={submitButtonStyle} onClick={Login}>LOGIN</CardButton>
          </div>
    </Card>
     
    </div>
  );
}

export default PatientLogin;
