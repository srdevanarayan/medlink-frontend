import React,{useState} from "react";
import {CardButton,Alert,Label} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";



const label = {
    width: "70%",
    fontSize: "1.1em",
    borderRadius:"2em",
    border: " 3px solid #10B3A0",
    opacity: 1,
    color: "#17EFF5",
    background: "rgba(10,10,10,0.5)",
  };

const dropdownStyle={
    width:"100%",
}

const submitButtonStyle={
    backgroundColor:"rgba(1,1,1,0.5)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const Appointment=({children})=>{

    const [place,setPlace]=useState("");
    const [hospital,sethospital]=useState("");
    const [dept,setDept]=useState("");
    const [doctor,setDoctor]=useState("");

    return(
        <div style={{margin:"2em 4em",justifyContent:"space-between"}} className="Column-center">
            <div className="column-center" style={{gap:"1em",}}> 
            <div className="row-center"style={{gap:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Place"
            style={label}
            onChange={(event)=>{
                setPlace(event.target.value);
            }}/>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Hospital"
            style={label}
            onChange={(event)=>{
                sethospital(event.target.value);
            }}/>
            </div>
            <div className="row-center"style={{gap:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Department"
            style={label}
            onChange={(event)=>{
              setDept(event.target.value);
            }}/>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Doctor"
            style={label}
            onChange={(event)=>{
                setDoctor(event.target.value);
            }}/>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <CardButton style={submitButtonStyle}>SEARCH AVAILABILITY</CardButton>    
            </div>                
            </div>
            <div>
            <div style={{display:"flex",
                    justifyContent:"center",
                    border:"dotted",
                    margin:"5% 30%",
                    padding:"1em 5em",
                    backgroundColor:"#10B3A0",
                    fontWeight:"900",
                    }}>
                <label htmlFor="bookAppintment">Available Token : 00</label>
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",marginTop:"auto"}}>
                <CardButton style={submitButtonStyle}>BOOK APPOINTMENT</CardButton>
            </div>
        </div>
    )
}


export default Appointment;