import React from 'react'
import {Card,BigButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const textColor = {
  color:"#17EFF4",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

const cardstyle={
  gap:"1em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%",
}

const label = {
  width: "70%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2.4em",
  border: " 0.1em solid #10B3A0",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};

function Addhospitals() {

return (
  <div className='column-center' style={{margin:"1% 10%" }}>
      <Card className='column-center' style={cardstyle}>
        <div><h2 style={textColor}>Verify Registration</h2></div>
        <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
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
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Password</label>
          </div>
        <Label
          placeholderStyle="label"
          type="password"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
      <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Retype Password</label>
          </div>
        <Label
          placeholderStyle="label"
          type="password"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
       
          <div style={{display:"flex",gap:"1em",justifyContent:"center"}}>
          <BigButton style={submitButtonStyle}>CREATE ACCOUNT</BigButton>
        </div>
      
    </Card>
    
  </div>
)
}

export default Addhospitals