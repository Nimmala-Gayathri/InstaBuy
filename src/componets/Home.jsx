// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useState} from "react"
import {useNavigate} from "react-router-dom";

import Carousel1 from '/src/assets/Carousel1.png';
import Carousel2 from '/src/assets/Carousel2.png';
import Carousel3 from '/src/assets/Carousel3.png';

import Product1 from '/src/assets/Product1.png'
import Product2 from '/src/assets/Product2.png'
import Product3 from '/src/assets/Product3.png'
import Product4 from '/src/assets/Product4.png'
import Product5 from '/src/assets/Product5.png'
import Product6 from '/src/assets/Product6.png'

import Button from 'react-bootstrap/Button';


export default function Home({user}){
    const [index,setIndex] = useState(0);
    const navigate = useNavigate()

    const handleClick = () =>{
        if(user){
            navigate("/products")
        }else{
            navigate("/login")
        }
    }
    const handleSelect = (selectIndex)=>{
        setIndex(selectIndex);
    }
    return(
        <div className="carouselCantainer">
            <Carousel activeIndex={index} onSelect = {handleSelect}>
                <Carousel.Item >
                    <Row>
                        <Col>
                        <div className = "Cantainer" style={{ marginLeft:"9rem",marginTop:"9%"}}>
                           <h2 style={{fontSize:"2.5rem"}}><i>SHOP WITH UTMOST</i></h2>
                            <h1 style={{color:"#2758f8" ,fontSize:"3rem"}}><i>CONFIDENCE</i></h1>
                            <p style={{fontSize:"1.5rem",width:"50%",color:"#3d3c3c",fontWeight:"bold"}}>Shop from the trendy clothes to the best gadget with Star Shopper you save 10% every time you shop!</p>
                            <div>
                                <Button style={{width:"50%"}} 
                                onClick={() =>{
                                    handleClick()
                                }}
                                >Browse Products</Button>
                            </div>
                            <div className="productDetails"> 
                                <h3>Products available from:</h3>
                                <ul className="product">
                                    <li><img src = {Product1}/></li>
                                    <li><img src = {Product2}/></li>
                                    <li><img src = {Product3}/></li>
                                    <li><img src = {Product4}/></li>
                                    <li><img src = {Product5}/></li>
                                    <li><img src = {Product6}/></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col >
                        <img style={{height:"80vh", width:"48vw",marginTop:"3rem"}}src={Carousel1}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col >
                        <div className = "Cantainer" style={{ marginLeft:"9rem",marginTop:"9%"}}>
                           <h2 style={{fontSize:"2.5rem"}}><i>SHOP WITH UTMOST</i></h2>
                            <h1 style={{color:"#2758f8" ,fontSize:"3rem"}}><i>STYLE</i></h1>
                            <p style={{fontSize:"1.5rem",width:"50%",color:"#3d3c3c",fontWeight:"bold"}}>Shop from the trendy clothes to the best gadget with Star Shopper you save 10% every time you shop!</p>
                            <div>
                                <Button style={{width:"50%"}}
                                  onClick={() =>{
                                    handleClick()
                                }}
                                >Browse Products</Button>
                            </div>
                            <div className="productDetails"> 
                                <h3>Products available from:</h3>
                                <ul className="product">
                                    <li><img src = {Product1}/></li>
                                    <li><img src = {Product2}/></li>
                                    <li><img src = {Product3}/></li>
                                    <li><img src = {Product4}/></li>
                                    <li><img src = {Product5}/></li>
                                    <li><img src = {Product6}/></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col >
                        <img style={{height:"74vh", width:"48vw",marginTop:"6rem"}}src={Carousel2}/>              
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div className = "Cantainer" style={{ marginLeft:"9rem",marginTop:"9%"}}>
                           <h2 style={{fontSize:"2.5rem"}}><i>SHOP WITH UTMOST</i></h2>
                            <h1 style={{color:"#2758f8" ,fontSize:"3rem"}}><i>DISCOUNT</i></h1>
                            <p style={{fontSize:"1.5rem",width:"50%",color:"#3d3c3c",fontWeight:"bold"}}>Shop from the trendy clothes to the best gadget with Star Shopper you save 10% every time you shop!</p>
                            <div>
                                <Button style={{width:"50%"}} 
                                  onClick={() =>{
                                    handleClick()
                                }}
                                >Browse Products</Button>
                            </div>
                            <div className="productDetails"> 
                                <h3>Products available from:</h3>
                                <ul className="product">
                                    <li><img src = {Product1}/></li>
                                    <li><img src = {Product2}/></li>
                                    <li><img src = {Product3}/></li>
                                    <li><img src = {Product4}/></li>
                                    <li><img src = {Product5}/></li>
                                    <li><img src = {Product6}/></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col >
                        <img style={{height:"74vh", width:"48vw",marginTop:"6rem"}}src={Carousel3}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
