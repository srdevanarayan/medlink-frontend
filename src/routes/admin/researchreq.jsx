import React, { useState } from 'react';
import {Card,FullSizeButton,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const cardstyle={
    backgroundColor:"rgba(10,10,10,0.3)",
    color:"#17EFF4",
    border:"1px solid #17EFF4",
    borderRadius:"2em",
    margin:"2em 6em 0em 6em"
}

const ResearcherReq =({children})=>{



var memberdata=[""]
    return (
        <div>
            {memberdata.map((ele,key)=>{
                return(
                    <div>
                        <Card style={cardstyle}>
                            <div className="row-center" style={{display:"flex",justifyContent:"space-between"}}>
                              <div className='row-center' style={{padding:"60px 20px",display:"flex",justifyContent:"center"}}>
                              <label htmlFor="" >Username,Purpose,datarequest</label>
                              </div>
                              <div className="column-center" style={{width:"15%",display:"flex",justifyContent:"end",gap:"0.6em"}}>
                                <div>
                                <FullSizeButton>
                                  ACCEPT
                                </FullSizeButton>
                                </div>
                                <div>
                                <FullSizeButton>
                                  REJECT
                                </FullSizeButton>
                                </div>
                              </div>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    )

}

export default ResearcherReq;