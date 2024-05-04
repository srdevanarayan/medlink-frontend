import React,{useState} from "react";
import {CardButton,FullSizeButton,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';


const label = {
    width: "70%",
    fontSize: "1.1em",
    borderRadius:"2em",
    border: " 3px solid #10B3A0",
    opacity: 1,
    color: "#17EFF4",
    background: "rgba(10,10,10,0.5)",
  };

const tableStyle = {
    border: "1px solid black",
    borderCollapse: "separate",
    width:"100%"
};

const submitButtonStyle = {
    width:"20%",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const tableRowStyle={
    padding:"1em 3em",
    width:"20%",
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    borderRadius: "1em",
    margin:"10% 20%",
    color: "#10B3A0"
}

const tableContentStyle={
    padding:"0em 1em",
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    borderRadius: "1em",
    margin:"10% 20%",
    color:"black",
    backgroundColor:"#10B3A0"
}

const viewButtonStyle = {
    width:"100%",
    margin:"0",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"#10B3A0",
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

var memberdata=[];//edit this

    return(
        <div className="column-center" style={{gap:"1em",margin:"1em"}}>
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
                <CardButton style={submitButtonStyle}>SHARE</CardButton>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <h5 style={{color:"#10B3A0"}}>Access List Of Seleted EMRS</h5></div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                    <th style={{
                            padding:"1em 3em",
                            width:"5%",
                            border: "1px solid #10B3A0",
                            borderCollapse: "separate",
                            borderRadius: "1em",
                            margin:"10% 20%",
                            color: "#10B3A0"}
                    } >Select</th>
                        <th style={tableRowStyle} >Time</th>
                        <th style={tableRowStyle} >Hospital</th>
                        <th style={tableRowStyle} >Department</th>
                        <th style={tableRowStyle} >Doctor</th>
                        <th style={tableRowStyle}>Actions</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr style={tableContentStyle}>
                        <td><input type="checkbox" style={{width:"100px"}}/></td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td style={{
                                    padding:"0em 2em",
                                    borderCollapse: "separate",
                                    borderRadius: "1em",
                                    color:"10B3A0",
                                    justifyContent:"center",
                                    display:"flex"
                                }}><FullSizeButton style={viewButtonStyle}> View</FullSizeButton></td>
                    </tr>);})}
                </table>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CardButton style={submitButtonStyle}>REMOVE SELECTED FROM ACCESS LIST</CardButton>
            </div>
        </div>
    )
}

export default EmrShare;