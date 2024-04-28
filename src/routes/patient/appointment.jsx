import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";



const dropdownStyle={
    width:"100%",
}

const submitButtonStyle={
    border:" none",
    borderRadius:"1em",
    backgroundColor:"#008CBA",
    color:"white",
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
        <div style={{margin:"1em 0em",justifyContent:"space-between"}} className="Column-center">
            <div className="row-center" style={{gap:"1em",justifyContent:"center",width:"100%"}}>
                    <div className="column-center" style={{gap:"1em",}}> 
                        <div className="row-center"style={{gap:"1em"}}>
                            <Dropdown style={dropdownStyle} options={[{value:"Place",label:"Place"}]} defaultValue={"Select Place"}></Dropdown>
                            <Dropdown style={dropdownStyle} options={[{value:"Hospital",label:"Hospital"}]} defaultValue={"Select Hospital"}></Dropdown>
                        </div>
                        <div className="row-center"style={{gap:"1em"}}>
                            <Dropdown style={dropdownStyle} options={[{value:"Department",label:"Department"}]} defaultValue={"Select Dept."}></Dropdown>
                            <Dropdown style={dropdownStyle} options={[{value:"Doctor",label:"Doctor"}]} defaultValue={"Select Doctor"}></Dropdown>
                        </div>
                </div>
                <Button style={submitButtonStyle}>Search Availability</Button>
            </div>
            <div>
            <div style={{display:"flex",justifyContent:"center",border:"dotted",margin:"10% 30%",padding:"1em 5em"}}>
                <label htmlFor="bookAppintment">Available Token : 00</label>
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",marginTop:"auto"}}>
                <Button style={submitButtonStyle}>Book Appintment</Button>
            </div>
        </div>
    )
}


export default Appointment;