import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";


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
    width:"30%",
    border:" none",
    borderRadius:"0.5em",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const Slot=({children})=>{

const [dept,setDept]=useState("");
const [memberdata,setMemberData] = useState([]);


function submit(e,dept){

}

function reset(e){
    
}

function save(){

}

    return(
        <div className="column-center">
            <div className="row-center" style={{display:"flex",gap:"1em",margin:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Department Name"
            style={label}
            onChange={(event)=>{
              setDept(event.target.value);
            }}
          />
           <Button  style={submitButtonStyle} onClick={(e)=>{submit(e,dept);}}>Search</Button>
           <Button  style={submitButtonStyle} onClick={(e)=>{reset(e);}}>Reset slot</Button>
            </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={{padding:"1em 3em",width:"20%",border: "1px solid black",borderCollapse: "collapse"}} >Doctor</th>
                        <th style={{padding:"1em 3em",width:"20%"}} >Slot</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(
                    <tr>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{}</td>
                    </tr>);})}
                </table>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button  style={submitButtonStyle} onClick={(e)=>{save(e);}}>SAVE</Button>
            </div>
        </div>
    )
}

export default Slot;