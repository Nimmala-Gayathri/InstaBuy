import React from "react";
import successImg from "../assets/success.png"

export default function Checkout (){
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={successImg } style={{width:"30rem",marginTop:"5rem"}}/>
        </div>
    )
}