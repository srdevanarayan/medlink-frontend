import React from "react";
import {Card,Button,Alert,Label} from "../components/components";
import "../styles/routes.css"
import "../styles/fonts.css"
import { sendFile } from "../ipfs/ipfs";

export const Requests=({children})=>{
    const tempIds=[
        {token:"1"},
        {token:"2"}
    ]




    function onSubmit(e){
        Alert({
            props:{
                text:"Do you want to upload file to IPFS",
                success:"Successfully uploaded to IPFS",
                denied:"Upload was denied"
            },
            type:"confirm"
        }).then((event)=>{
            const file=e.target.files[0];
            //send file somehow
            sendFile(file);
        })
    }

    return (
    <div className="column-center" style={{
        justifyContent:"center",
        alignItems:"center",
        gap:"1em",
        padding:"2em"
    }}>
        {
            tempIds?.map((tempId,key)=>{
                return <Card className="column-center" key={key} style={{
                    width:"80%",
                    justifyContent:"center",
                    alignItems:"center"
                }}> 
                    <form onSubmit={onSubmit}>
                    <h5>Token id: {tempId.token}</h5>   
                        <Label type="file" >Upload Files</Label>
                        <Button type="submit" style={{
                            border:" none",
                            borderRadius:"1.2em",
                            backgroundColor:"#008CBA",
                            color:"white",
                            fontFamily: "'PT Sans', sans-serif",
                            fontWeight: '400',
                            fontStyle: 'normal',
                            padding:"1em"
                        }} >Submit</Button>
                    </form>
                </Card>
            })
        }
    </div>
    );

}