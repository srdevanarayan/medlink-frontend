import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";


const dropdownStyle={
    width:"100%",
}

const label = {
    width: "70%",
    fontSize: "1.1em",
    borderRadius:"0",
    border: " 3px solid #dc3845",
    opacity: 1,
    color: "black",
    background: "rgba(255, 255 , 255, 0.43)",
  };

const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width:"100%"
};

const submitButtonStyle = {
    width:"20%",
    border:" none",
    borderRadius:"0.5em",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const EmrShare=({children})=>{

const [place,setPlace]=useState("");
const [hospital,sethospital]=useState("");
const [dept,setDept]=useState("");
const [doctor,setDoctor]=useState("");

var memberdata=[""];//edit this

    return(
        <div className="column-center" style={{gap:"1em",margin:"1em"}}>
            <div className="row-center" style={{gap:"1em",justifyContent:"center",width:"100%"}}>
                    <div className="column-center" style={{gap:"1em",}}> 
                        <div className="row-center"style={{gap:"1em"}}>
                            <Dropdown style={dropdownStyle} options={[{value:"Place",label:"Place"}]} defaultValue={"Select Place"}></Dropdown>
                            <Dropdown style={dropdownStyle} options={[{value:"Hospital",label:"hospital"}]} defaultValue={"Select Hospital"}></Dropdown>
                        </div>
                        <div className="row-center"style={{gap:"1em"}}>
                            <Dropdown style={dropdownStyle} options={[{value:"Department1",label:"department1"}]} defaultValue={"Select Dept."}></Dropdown>
                            <Dropdown style={dropdownStyle} options={[{value:"Doctor",label:"Doctor"}]} defaultValue={"Select Doctor"}></Dropdown>
                        </div>
                </div>
                <Button style={submitButtonStyle}>Share</Button>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}><h5>Access List Of Seleted EMRS</h5></div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={{padding:"1em 3em",width:"20%",border: "1px solid black",borderCollapse: "collapse"}} >Time</th>
                        <th style={{padding:"1em 3em",width:"20%",border: "1px solid black",borderCollapse: "collapse"}} >Hospital</th>
                        <th style={{padding:"1em 3em",width:"20%",border: "1px solid black",borderCollapse: "collapse"}} >Department</th>
                        <th style={{padding:"1em 3em",width:"20%",border: "1px solid black",borderCollapse: "collapse"}} >Doctor</th>
                        <th style={{padding:"1em 3em",width:"20%"}}>Actions</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 5em"}}><Button>View Details</Button></td>
                    </tr>);})}
                </table>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button style={submitButtonStyle}>Remove Selected from access list</Button>
            </div>
        </div>
    )
}

export default EmrShare;