import React,{useState} from "react";
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";


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
    width:"30%",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"white",
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
    borderRadius: "5em",
    margin:"10% 20%",
    color: "#10B3A0"
}

const tableContentStyle={
    padding:"0em 0em",
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    borderRadius: "5em",
    margin:"10% 20%",
    color:"black",
    backgroundColor:"#10B3A0"
}

const Appointments=({children})=>{

const [dept,setDept]=useState("");
const [memberdata,setMemebreData] =useState([])


function submit(e,dept){

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
           <CardButton  style={submitButtonStyle} onClick={(e)=>{submit(e,dept);}}>SEARCH</CardButton>
            </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={tableRowStyle} >Token Number</th>
                        <th style={tableRowStyle} >Doctor</th>
                        <th style={tableRowStyle} >Actions</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr style={tableContentStyle}>
                        <td >{}</td>
                        <td >{}</td>
                        <td style={{
                                    padding:"0em 0em",
                                    borderCollapse: "separate",
                                    borderRadius: "1em",
                                    color:"10B3A0",
                                    justifyContent:"center",
                                    display:"flex"
                                }}>
                            <CardButton>CANCEL</CardButton>
                        </td>
                    </tr>);})}
                </table>
            </div>
        </div>
    )
}

export default Appointments;