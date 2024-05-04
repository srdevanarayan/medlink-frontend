import React,{useState} from "react";
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';

const label = {
  width: "70%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "0.4em",
  border: " 0.1em solid #10B3A0",
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
  margin:"4% 25%"
}

const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
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

const AddDept=({children})=>{

  const [dept,setDept]= useState("");

  return (
      <div className="column-center" style={{gap:"0em",margin:"2em 2em", padding:"5em 13em"}}>
        <Card className="column-center" style={cardstyle}>
        <div style={textColor}><h2 >Add Department</h2></div>
        <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Department Name</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setDept(event.target.value)
          }}
        /></div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <CardButton style={submitButtonStyle}>ADD</CardButton>
          </div>
        </Card>
         
      </div>
  )
}

export default AddDept;
