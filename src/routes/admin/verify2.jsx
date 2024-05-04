import React from 'react'
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
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
  gap:"1.5em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"5% 15%"
}

const labelstyle={
  color:"#000000",
  padding:"20px 0px",
  height:"39px",
  background:"#17EFF4",
  borderRadius: "2em",
  border:"1px solid #17EEF4",
  width:"100%",
  height:"20px",
  width: "90%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2.4em",
  opacity: 1,
  color: "black",
}


const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};


function VerifyDetails() {

  const name="";
  const place="";
  const dob="";
  const sex="";
  const adhar="";
return (
  <div style={{margin:" 5% ",justifyContent:"center"}}>
    <Card className='column-center' style={cardstyle}> 
      <div style={textColor}>
        <h2>Details</h2>
      </div>
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"10px 0px",height:"39px"}}>Name</label>
          </div>
    <div style={labelstyle}>
       <label htmlFor="name">{name}</label>
</div>
    </div>
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"0px 0px",height:"39px"}}>Date of Birth</label>
          </div>
          <label htmlFor="name" style={labelstyle}>{dob}</label>
    </div>
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Place</label>
          </div>
          <label htmlFor="name" style={labelstyle}>{place}</label>
    </div>
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Sex</label>
          </div>
          <label htmlFor="name" style={labelstyle}>{sex}</label>
    </div>
    <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Aadhaar Number</label>
          </div>
          <label htmlFor="name" style={labelstyle}>{adhar}</label>
    </div>
      <div style={{display:"flex",gap:"1em",justifyContent:"end"}}>
        <CardButton style={submitButtonStyle}>VERIFY</CardButton>
        <CardButton style={submitButtonStyle}>REJECT</CardButton>
      </div>
    </Card>
    
  </div>
  )
}

export default VerifyDetails