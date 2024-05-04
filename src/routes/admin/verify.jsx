import React, { useState } from 'react'
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import { BsDisplay } from 'react-icons/bs';

const textColor = {
  color:"#17EFF4",
  display:"flex",
  justifyContent:"center"
}


const label = {
  width: "90%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2.4em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const dropdownStyle={
  width:"40%",
}

const cardstyle={
  gap:"3em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%"
}


const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,0.5)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"30%",
};

function  Verify() {

function handleSubmit(){

}
const [privateKey,setPrivateKey]=useState("");
const [name,setName]=useState("");



  return (
    <div className='column-center' style={{margin:"4% 20%"}}>
      <Card className='column-center' style={cardstyle}>
        <div style={textColor}><h2 >Verify Registration</h2></div>
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
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Generated Password</label>
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
        <Link to="/verifydetails">
        <div style={{display:"flex",justifyContent:"center"}}>
          <CardButton style={submitButtonStyle}> 
              SEARCH
          </CardButton>
        </div>
        </Link>
      </Card>
    </div>
  )
}

export default Verify