import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import { Dropdown } from "../../components/dropdown";
import '../../styles/routes.css';
import '../../styles/fonts.css';


const dropdownStyle={
    width:"100%",
}


const cardStyle={
    display: "flex", 
    gap: "2em",
    width:"30%",
    justifyContent:"flex-start",
};

const newcardStyle={
    gap:"1em",
    width:"60%",
    display:"flex",
    justifyContent:"center",
}

const submitButtonStyle={
    border:" none",
    borderRadius:"1.2em",
    backgroundColor:"red",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em 1.5em",
    width:"60%",
    display:"flex",
    justifyContent:"flex-end",
};

const tokenButtonStyle={
    border:" none",
    borderRadius:"1.2em",
    backgroundColor:"#008CBA",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};


const Tokens=({children})=>{

    var dataFromBlockchain=[
        "sdadasdasdasdas- blood test",
        "afsdkfhgkdfjgf- scan report",
        "cvjbfkjbdfjbdjf- mri report",
        "sdadasdasdasdas- blood test",
        "afsdkfhgkdfjgf- scan report",
        "cvjbfkjbdfjbdjf- mri report",
        "sdadasdasdasdas- blood test",
        "afsdkfhgkdfjgf- scan report",
        "cvjbfkjbdfjbdjf- mri report",
        "sdadasdasdasdas- blood test",
        "afsdkfhgkdfjgf- scan report",
        "cvjbfkjbdfjbdjf- mri report",        
    ];

    return (
        <div className="row-center">
            <Card className="column-center" style={newcardStyle}>
            {dataFromBlockchain.map((ele,key)=>{
                return(
                    <h4 style={{display:"flex",justifyContent:"center"}}>{key+1} {ele}</h4>
                )
            })}
            <div style={{padding:"1em 10em"}}>
            <Button style={submitButtonStyle}>Confirm data</Button>
            </div>
            </Card>
            <Card className="column-center" style={cardStyle}>
                    <Dropdown style={dropdownStyle} options={[{value:"hospital",label:"hospital"}]} defaultValue={"Select Hospital"}></Dropdown>
                    <Dropdown style={dropdownStyle} options={[{value:"doctor",label:"doctor"}]} defaultValue={"Select Doctor"}></Dropdown>
                <Button style={tokenButtonStyle}>Take a Token</Button>
            </Card>
        </div>
    );
}

export default Tokens;