import React,{useState} from "react";
import { Button, Card, Label } from "../components/components";
import "../styles/routes.css";
import "../styles/fonts.css";
import { BG } from "../images/images";
import { Dropdown } from "../components/dropdown";
import { register } from "../blockchain/setup";

const text = {
  color: "#dc3845",
  fontFamily: `"Littera Book", sans-serif`,
};

const label = {
  width: "65%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "white",
  background: "rgba(226, 93, 104, 0.43)",
};

const card = {
  width: "30%",
  minHeight: "60%",
  padding: "1.7em",

  justifyContent: "center",
  alignItems: "center",

  background: "rgba(220, 56, 69, 0.11)",
  border: "0.1em solid red",
  borderRadius: "1em",
  boxShadow: "0em 0em 0em #eee",
};

const background = {
  justifyContent: "center",
  alignItems: "center",
  height: "92.9vh",

  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const button={
  height:"1.2em",
  fontSize:"0.8em",
  width:"auto"
}

const Register = ({props}) => {
  // Define state variables for each input field
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");
  const [sex, setSex] = useState("");
  const [aadhaar, setAadhaar] = useState(0);

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Create an object with form data
    const formData = {
      name,
      dob,
      place,
      sex,
      aadhaar,
    };

    // Log form data (for demonstration)
    console.log(formData);

    // You can perform further actions here, such as sending the form data to a server via AJAX
    if(props?.contract){
      register(props?.contract,props?.accounts[0],formData)
    }

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
            gap: "2em",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={submitForm}
        >
          <h1 style={text}>Create Account</h1>
          <Label
            placeholderStyle="labelWhite"
            type="text"
            placeholder="Name"
            style={label}
            onChange={(event)=>{
              setName(event.target.value)
            }}
          />
          <Label
            placeholderStyle="labelWhite"
            type="date"
            placeholder="Date of Birth"
            style={label}
            onChange={(event)=>{
              setDob(event.target.value)
            }}
          />
          <Label
            placeholderStyle="labelWhite"
            type="text"
            placeholder="Place"
            style={label}
            onChange={(event)=>{
              setPlace(event.target.value)
            }}
          />
          <Label
            placeholderStyle="labelWhite"
            type="text"
            placeholder="Sex"
            style={label}
            onChange={(event)=>{
              setSex(event.target.value)
            }}
          />
          {/* <Dropdown options={[{value:"option1",label:"option1"}]}></Dropdown> */}
          <Label
            placeholderStyle="labelWhite"
            type="number"
            placeholder="Aadhaar No."
            style={label}
            onChange={(event)=>{
              setAadhaar(event.target.value)
            }}
          />
          <Button className={`button-rounded`} style={button}>Register</Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
