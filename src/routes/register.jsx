import React, { useState } from "react";
import { Button, Card,Label } from "../components/components";
import "../styles/routes.css";
import "../styles/fonts.css";
import { BG } from "../images/images";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { generateKey } from "../encryption_and_cpabe/cpabe";
import { getData } from "../storage/session";
import { setUserData } from "../contract_functions/patient_info";
import { setRegistrationData } from "../contract_functions/registration";

const text = {
  color: "#17EFF4",
  fontFamily: `"Littera Plain", sans-serif`,
};

const inputStyle = {
  fontFamily: `"Littera Plain", sans-serif`,
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "white",
  background: "rgba(226, 93, 104, 0.43)",
};

const placeholderStyle = {
  color: "white",
};

const card = {
  width: "30%",
  minHeight: "60%",
  padding: "1.7em",
  minWidth: "150px",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",
  background: "rgba(10, 10, 10, 0.5)",
  border: "0.1em solid #10B3A0",
  borderRadius: "1em",
  boxShadow: "0em 0em 0em #eee",
};

const background = {
  justifyContent: "center",
  alignItems: "center",
  height: "calc(95vh - 20px)",
  overflow: "auto",

  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const button = {
  // height: "1.2em",
  // fontSize: "1.1em",
  // width: "100%",
  // padding: "1.5em",
};

const label = {
  width: "48%",
  fontSize: "1em",
  borderRadius:"2em",
  border: " 1px solid #10B3A0",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};



const Register = ({ props,web3,account }) => {
  // Define state variables for each input field
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");
  const [sex, setSex] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [role,setVal]=useState('Patient');

  //dropdown
  const dropdown_options=["Patient","Doctor","Researcher"];
  const defaultOption=dropdown_options[0];
  function setDropdown(e){
    if(e.val!=undefined){
    setVal(e.val);
    console.log(e.value);
    }
  }

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    const date = parseInt( dob.split('-')[2]+dob.split('-')[1]+dob.split('-')[0]);

    let _role=role;

    if(role===undefined){
      setVal('Patient')
      _role='Patient';
    }
    
    //generate cpabe
    generateKey([getData('user-name'),_role])
   
    //based on the role call their contract functions
    if(_role=='Patient'){
      setUserData(
        web3,
        getData('user-name'),
        getData('enc-private-key'),
        getData('cpabe'),
        [getData('user-name'),role]
      )
    }
    else if(_role=='Doctor'){
      // complete
    }
    else if(_role=='Researcher'){
      //complete
    }
    
    //call contract function
    setRegistrationData(
      getData('user-name'),
      name,
      date,
      place,
      sex,
      aadhaar,
      _role,
      getData('account-address')
    )  

 
    // Reset form fields after submission (optional)
    setName("");
    setDob("");
    setPlace("");
    setSex("");
    setAadhaar("");
  }

  return (
    <div className="row-center" style={background}>
      <Card className="row-center" style={card}>
        <form
          action=""
          className="column-center"
          style={{
            gap: "0.8em",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
          
        >
          <h2 style={text}>Register</h2>
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 42px",height:"39px"}}>Name</label>
          </div>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
          
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 42px",height:"39px"}}>Place</label>
          </div>        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setPlace(event.target.value)
          }}
        /></div>
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 42px",height:"39px"}}>Sex
          </label>
          </div>        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setSex(event.target.value)
          }}
        /></div>
          <div className='row-center' style={{height:"39px",gap:"2%",display:"flex",justifyContent:"space-evenly"}}>
          <div style={{width:"50%",padding:"10px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 42px",height:"39px"}}>Aadhaar
          </label>
          </div>        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setAadhaar(event.target.value)
          }}
        /></div>
          <div className='row-center' style={{height:"39px",gap:"0%"}}>
          <div style={{width:"50%",padding:"10px 44px 0px 20px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"20px 0px",height:"39px"}}>Date of Birth
          </label>
          </div>        <Label
          placeholderStyle="label"
          type="date"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setDob(event.target.value)
          }}
        /></div>
        <div className="row-center" style={{height:"39px",gap:"2em"}}>
        <div style={{width:"50%",padding:"10px 72px 0px 0px"}}>
          <label htmlFor="username" style={{color:"#17EFF4", padding:"0px 10px",height:"39px"}}>Role</label>
          </div>
          <div className="column-center">
            <Dropdown options={dropdown_options} value={defaultOption} placeholder="Select an option" onChange={setDropdown} />;
          </div>
          </div>
          <Button className={`button-rounded`} style={button} onClick={async (e)=>{submitForm(e)}}>
            REGISTER
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
