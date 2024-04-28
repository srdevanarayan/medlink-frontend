import React,{useState} from "react";
import {Card} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';


const Profile=({children})=>{

    const username="username";
    const name="Name";
    const age="43";
    const place="PLACE";
    const dob="dd-mm-yyyy";

    return(
        <div className="column-center" style={{padding:"2em 1em",gap:"1em",width:"auto%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3 style={{display:"flex",justifyContent:"center"}}>My Profile</h3>
            <Card>
                <ul>
                    <li>USERNAME: {username}</li>
                    <li>NAME:  {name}</li>
                    <li>AGE:   {age}</li>
                    <li>DOB:   {dob}</li>
                    <li>PLACE: {place}</li>
                </ul>
            </Card>
        </div>
    )
}

export default Profile;