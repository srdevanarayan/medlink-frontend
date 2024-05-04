import React,{useState} from "react";
import {CardButton,FullSizeButton,Alert,Label,SearchBar} from "../../components/components";
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
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

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

const Emr=({children})=>{

const [date,setDate]=useState("");
const [memberdata,setMemberData] = useState([])
// var memberdata=[""];

function submit(e,date){
    
}

    return(
        <div className="column-center">
            <div className="row-center" style={{display:"flex",gap:"1em",margin:"1em"}}>
            <Label
            placeholderStyle="label"
            type="date"
            placeholder="Select Date"
            style={label}
            onChange={(event)=>{
              setDate(event.target.value);
            }}
          />
           <CardButton  style={submitButtonStyle} onClick={(e)=>{submit(e,date);}}>SEARCH</CardButton>
            </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={
                            {
                                padding:"1em 3em",
                                width:"5%",
                                border: "1px solid #10B3A0",
                                borderCollapse: "separate",
                                borderRadius: "1em",
                                margin:"10% 20%",
                                color: "#10B3A0",
                            }
                        } >Select</th>
                        <th style={tableRowStyle} >Time</th>
                        <th style={tableRowStyle} >Hospital</th>
                        <th style={tableRowStyle} >Department</th>
                        <th style={tableRowStyle} >Doctor</th>
                        <th style={tableRowStyle} >Actions</th>
                        <th style={tableRowStyle}>Reasearch Sharing</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr style={tableContentStyle}>
                        <td style={{display:"flex",justifyContent:"center"}}><input  type="checkbox"/></td>
                        <td >{}</td>
                        <td >{}</td>
                        <td >{}</td>
                        <td >{}</td>
                        <td >
                        <Link to="/emr/view">
                            <FullSizeButton style={viewButtonStyle}>VIEW</FullSizeButton>
                        </Link>
                            </td>
                        
                        <td style={{
                            padding:"0em 1em",
                            border: "1px solid #10B3A0",
                            borderCollapse: "separate",
                            borderRadius: "1em",
                            color:"10B3A0",
                            justifyContent:"center",
                            display:"flex",
                        }}><FullSizeButton style={viewButtonStyle}>TURN OFF</FullSizeButton></td>
                    </tr>);})}
                </table>
            </div>
            <Link to="/emr/share">
                <div style={{display:"flex",justifyContent:"center"}}>
                    <CardButton style={submitButtonStyle}>SHARE SELECTED EMRS</CardButton>
                </div>
            </Link>
        </div>
    )
}

export default Emr;