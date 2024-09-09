import React, { useState } from "react";
import { Row,Col,Form,Button } from "react-bootstrap";
import LoginImg from "../assets/LoginImg.png";
import {useNavigate} from "react-router-dom"

export default function Login({setUser}){
    const [email,setEmail] = useState("")
    const navigate  = useNavigate()
    return(
    
        <div style={{backgroundColor:"#216ad9"}}>
            <Row style={{width:"100vw"}}>
                <Col>
                <div style={{marginLeft:"8rem",marginTop:"8rem "}}>
                     <h1 style={{color:"white",fontSize:"4rem"}}>InstaBuy!</h1>
                     <p  style={{color:"white", width:"40%"}}>One place whre brands come together From all across the world.</p>
                     <Form>
                            <div style={{display:"flex",justifyContent:"space-between",width:"75%"}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Username"
                                    onChange={(e) =>setEmail(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                            </div>
                            <Button
                            onClick={() =>{
                                localStorage.setItem("UserEmail",email);
                                setUser(email);
                                navigate("/")
                            }}
                            style={{background:"#216ad9",border:"2px solid white",width:"75%",color:"white"}} variant="outline-secondary" type="submit">
                                Submit
                            </Button>
                            <div style={{color:"white" ,marginTop:"2rem",marginLeft:"9rem"}}>
                                Join the club,<span onClick={() => navigate("/signup")} style={{color:"white"}}>Click here</span>
                            </div>
                        </Form>
                </div>
                </Col>
                <Col> <img src={LoginImg} style={{height:"86vh"}}/></Col>
            </Row>
        </div>
    );
}