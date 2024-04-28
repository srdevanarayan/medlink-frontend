import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';



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

const FamilyMembers=({children})=>{

const [name,setName]=useState("");
const [memberdata,setMemberdata]=useState(["user1","user2","user3","user1","user2","user3"]);

function submit(e,name){
    setMemberdata((memberdata)=>[...memberdata,name])
}


    return(
        <div className="column-center">
            <div className="row-center" style={{display:"flex",gap:"1em",margin:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Enter Username of member"
            style={label}
            onChange={(event)=>{
              setName(event.target.value);
            }}
          />
           <Button  style={submitButtonStyle} onClick={(e)=>{submit(e,name);}}>Add to access list</Button>
            </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={{padding:"1em 5em",width:"50%",border: "1px solid black",borderCollapse: "collapse"}} >Username</th>
                        <th style={{padding:"1em 5em",width:"50%"}}>Actions</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 1em"}}>{name}</td>
                        <td style={{border: "1px solid black",borderCollapse: "collapse",padding:"0em 5em"}}><Button>Remove</Button></td>
                    </tr>);})}
                </table>
            </div>
        </div>
    )
}

export default FamilyMembers;