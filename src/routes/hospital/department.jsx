import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';

const label = {
  width: "auto%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "0.4em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "black",
  background: "rgba(255, 255, 255, 0.43)",
};

const dropdownStyle={
  width:"40%",
}


const submitButtonStyle={
  border:" none",
  borderRadius:"0.4em",
  backgroundColor:"rgba(10,10,10,0.5)",
  color:"white",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};

const AddDept=({children})=>{

  const [dept,setDept]= useState("");

  return (
      <div className="column-center" style={{gap:"3em",margin:"5em 2em", padding:"5em 13em"}}>
         <Label
          placeholderStyle="label"
          type="text"
          placeholder="Enter Department Name"
          style={label}
          onChange={(event)=>{
            setDept(event.target.value)
          }}
        />
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={submitButtonStyle}>Add</Button>
          </div>
      </div>
  )
}

export default AddDept;
