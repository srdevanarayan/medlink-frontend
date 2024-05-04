import React, { useState } from 'react';
import {Card,CardButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const cardstyle={
    backgroundColor:"#10B3A0",
    color:"#000000",
    border:"1px solid #17EFF4",
    borderRadius:"2em",
    margin:"2em 2em 0em 2em"
}

const CompletedRequests =({children})=>{



var memberdata=[""]
    return (
        <div>
            {memberdata.map((ele,key)=>{
                return(
                    <div>
                        <Card style={cardstyle}>
                            <div className="column-center" style={{display:"flex",justifyContent:"end"}}>
                                <div>
                                    <label style={{padding:"20px 10px"}} htmlFor="disease"><h4>Disease: {}</h4></label>
                                </div>
                                <div className="row-center" style={{display:"flex",justifyContent:"space-between"}}>
                                    <label htmlFor="age"><h4>Age: </h4></label>
                                    <label htmlFor="sex"><h4>Sex:</h4></label>
                                    <label htmlFor="sample"></label>
                                </div>
                                <div style={{display:"flex",justifyContent:"end"}}><CardButton>CANCEL</CardButton></div>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    )

}

export default CompletedRequests;