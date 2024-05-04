import React, { useState,useEffect, } from "react";
import { Button, Label, Card } from "../components/components";
import { Link ,useNavigate} from "react-router-dom";
import { BG } from "../images/images";
import { checkIfUserAlreadyExists,createAccount, } from "../blockchain/registerUser";
import { getData, setData } from "../storage/session";
import { encryptUsingPassword } from "../encryption_and_cpabe/encryption";
import 'react-dropdown/style.css';
import "../styles/routes.css";
import "../styles/fonts.css";




{/**styles */}

const text = {
  color: "#10b3A0",
  fontFamily: `"Littera Plain", sans-serif`,
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

const inputStyle = {
  fontFamily: `"Littera Plain", sans-serif`,
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #10B3A0",
  opacity: 1,
  color: "white",
  background: "#10B3A0",
  opacity:"0.5"
};

const placeholderStyle = {
  color: "white",
};

const card = {
  width: "40%",
  minHeight: "60%",
  padding: "1.7em",
  minWidth: "150px",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",
  gap : "1em",
  background: "rgba(10, 10, 10, 0.11)",
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


async function fetchAccount(web3,password){

  let account_address=getData('account-address');
  let private_key=getData('private-key');
  console.log({account_address,private_key},)

  //create  temporary account if no account is present
  if(account_address===null||private_key===null||account_address===undefined||private_key===undefined||account_address==='undefined'||private_key==='undefined'){

    const accountData=await createAccount(web3);
    console.log('again new data created')

    //store in local variable
    account_address=accountData.account.address;
    private_key=accountData.account.privateKey;

    //store to session
    setData('account-address',account_address);
    const enc_private_key=encryptUsingPassword(private_key,password)
    setData('enc-private-key',enc_private_key);
  }

  const account={
    address:account_address,
    private_key:account_address
  }

  console.log({account})

  return account; 
} 



const Create = ({ props,web3,account,setAccount }) => {
  
  let tempAccount=null;
  

  const [name, setName] = useState("");
  const [check,setCheckStatus]=useState(true);
  const [proceed,setProceed]=useState(null);
  const [display,setdisplay]=useState(false);

  const [password,setPassword]=useState('');
  const [confirm,setConfirmPassword]=useState('');

  const navigate = useNavigate();

  //compares the password enterd
  function confirmPasswords(){
    if(password==''||confirm==''||password!=confirm){
      return false;
    }
    return true;
  }
  
  //unless the user already exist you can create a new user with that user name and 
  //data is stored in session
  const validate = async () => {
    
    const exists=await checkIfUserAlreadyExists(name,web3);
    
    setProceed(exists)

    if(exists==false){
      setCheckStatus(false)
      setData('user-name',name)
    }
    else{
      setCheckStatus(true)
    }

  };

  /**
   * 
   * if(tempAccount==null && web3!=null){
      tempAccount=await fetchAccount(web3);
    }
    if(tempAccount!=null){
      const exists=await checkIfUserAlreadyExists(name,web3);
      console.log({exists})

      setProceed(exists)

      if(exists==false){
        setCheckStatus(false)
        setData('user-name',name)
      }
      else{
        setCheckStatus(true)
      }
    }
   * 
   */

  //confirms the password checks and whether we can register 
  //if yes we create a temporary acccount which will be thhe account for the new user
  async function shouldRegister(){
   
    if(proceed==false && confirmPasswords())  {
      navigate("/register");
      setData('password',password)

      //temporary account created and credentials stored in session
      tempAccount=await fetchAccount(web3,password);

    }
  }
    


  return (

    

    <div className="row-center" style={background}>
      <Card className="row-center" style={card}>
        <div className="column-center"
          style={{
            gap: "2em",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}>
          <h1 style={text}>Create Account</h1>
          <div className="column-center" style={{display:"flex", justifyContent:"space-evenly"}}>
          <div >
          <div className='row-center' style={{height:"39px",display:"flex",justifyContent:"space-evenly"}}>
          <label htmlFor="username" style={{color:"#17FFE4", padding:"10px 5px ",height:"39px"}}>UserName</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
        {check==true &&<label  style={{color:"#FF0000",justifyContent:"center",display:"flex"}}>Check Your Username</label>}
          </div>
      
          {proceed==false &&
          <div  className="column-center" style={{gap:"2em"}}>
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <label htmlFor="Password" style={{color:"#17FFE4", padding:"20px 42px",height:"39px"}}>Password</label>
        <Label
          placeholderStyle="label"
          type="password"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setPassword(event.target.value)
          }}
        /></div>
          <div className='row-center' style={{height:"39px",gap:"2%"}}>
          <label htmlFor="Confirm Password" style={{color:"#17FFE4", padding:"10px 45px 20px 41px",height:"39px", width:"14.5%"}}>Confirm Password</label>
        <Label
          placeholderStyle="label"
          type="password"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setConfirmPassword(event.target.value)
          }}
        /></div>
          {/* <Dropdown options={[{value:"option1",label:"option1"}]}></Dropdown> */}
          {/* <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
       
          </Link> */}
          </div>}
          </div>
           {check==true && <Button className={`button-rounded`} style={button} onClick={async ()=>{await validate()}}>
            CHECK
          </Button>}

          {proceed==false && <Button className={`button-rounded`} style={button} onClick={shouldRegister}>
            CREATE
          </Button>}
          
        </div>
      </Card>
    </div>
  );
};

export default Create;
