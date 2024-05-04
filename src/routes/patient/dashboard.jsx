import React from "react";
import { Card,Button } from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import addfamily from "../../../MedLink-Icons/PatientDashboard/addfamily&friends.png";
import takeappointment from "../../../MedLink-Icons/PatientDashboard/takeappointment.png";
import viewappointments from "../../../MedLink-Icons/PatientDashboard/viewappointments.png";
import viewmedicalrecords from "../../../MedLink-Icons/PatientDashboard/viewmedicalrecords.png";
import viewmedicalrecordsoffamily from "../../../MedLink-Icons/PatientDashboard/viewmedicalrecordsoffriends&family.png";



const submitButtonStyle={
    width:"150%",
    backgroundColor:"rgba(10, 10, 10, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const cardstyle={
     gap:"1em",
     border: "1px solid #10B3A0",
     borderRadius:"2em",
     margin:"0%",
     fontSize: "25px",
     width:"75%",
     height:"75%",
     display:"flex",
     justifyContent:"center"
   }

   const textColor={
     color:"#17EFF4",
     display:"flex",
     justifyContent:"center"
   }


export const DashboardPatient=({children})=>{
    return(
        <div className="column-center" style={{margin:"4em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:"3em"}}>
            <Link to="/familymembers">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={addfamily} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Add Family & Friends</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/appointment">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={takeappointment} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Take Appointment</h6>
                    </div>
                    </Card>
               </Link>
            </div>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto auto",justifyContent:"center",gap:"3em"}}>
            <Link to="/appointment/view">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={viewappointments} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>View Appointments</h6>
                    </div>
                    </Card>
               </Link>
            <Link to="/emr">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={viewmedicalrecords} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>View Medical Records</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/familymembers/emr">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={viewmedicalrecordsoffamily} height="40px" width="25px" alt="" />
                    </div>
                    <div style={{width:"150px",display:"flex"}}>
                         <h6 style={textColor}>View Medical Records of Family & Friends</h6>
                    </div>
                    </Card>
               </Link>
            </div>
        </div>
    )
}