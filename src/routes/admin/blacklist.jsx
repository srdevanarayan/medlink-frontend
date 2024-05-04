import React , {useState}from 'react'
import {Card,BigButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const textColor = {
  color:"#17EFF4",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

const label = {
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const cardstyle={
  gap:"3em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"4% 35%"
}

const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"100%",
 
};

function Blacklist() {

    const [blacklist_input, setBlacklist_input] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // private key backend logic
      console.log(blacklist_input);
    };
  
    const handleChange = (e) => {
        setBlacklist_input(e.target.value);
    };
  
  
     function blacklistLogic(){
 // add the logic here

     }
     
     

  return (
    <div className='admin-container'>
      <Card style={cardstyle}>
        <h2 style={textColor}>Blacklist Account</h2>
        <div className="column-center" style={{gap:"1em"}}>
          <div className='column-center' style={{margin:"60px 10px", gap:"0.5em"}}>
          <label htmlFor="username" style={{color:"#17EFF4", fontSize:"23px",display:"flex",justifyContent:"center"}}>Enter username</label>
         <Label
          placeholderStyle=""
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setDept(event.target.value)
          }}
        /></div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <BigButton style={submitButtonStyle}>BLACKLIST</BigButton>
          </div>\
          </div>
        </Card>
        
    </div>
  )
}

export default Blacklist