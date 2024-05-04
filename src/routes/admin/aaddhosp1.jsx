import React, { useState } from 'react'
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const textColor = {
  color:"#17EFF4",
  display:"flex",
  justifyContent:"center",
  gap:"2em"
}

const cardstyle={
  gap:"1em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"5% 25%"
}

const label = {
  width: "90%",
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

function Addhospital() {

  const [name,setName] = useState("");
  const [Place,setPlace] = useState("");
  const [licence,setlicence] = useState("");
  const [contact,setcontact] = useState("");
  const [ownership,setownership] = useState("");

return (
  <div className='column-center' style={{margin:"1% 1%"}}>
      <Card className='column-center' style={cardstyle}>
        <div><h2 style={textColor}>Add Hospital</h2></div>
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
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Place</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setPlace(event.target.value)
          }}
        /></div>
      <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Licence Number</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setlicence(event.target.value)
          }}
        /></div>
      <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Ownership</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setownership(event.target.value)
          }}
        /></div>
      <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Contact info</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setcontact(event.target.value)
          }}
        /></div>
        <Link to="/addhospitalusername">
          <div style={{display:"flex",gap:"1em",justifyContent:"center"}}>
          <CardButton style={submitButtonStyle}>CONTINUE</CardButton>
        </div>
        </Link>
      
    </Card>
    
  </div>
)
}

export default Addhospital