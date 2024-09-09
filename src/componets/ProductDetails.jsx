import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

export default function ProductDetails ({cartItems,handleAddCart}){
    const location = useLocation();
    const navigate = useNavigate()
    const {title,price, images, description,category,id} = location.state
    // console.log(description)

    const [otherProducts,setOtherProducts] = useState([])
    useEffect(() =>{
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=15&offset=0`)
            // console.log(response.data)
            setOtherProducts(response.data)
        }
        getData()
    },[])
    return(
        <div style={{width:"98vw"}}>
            <Row>
                <Col lg={2}>
                {images.map((image,index) =>{
                    return(
                        <div key={index}>
                            <img  src={image} style={{width:"8rem",borderRadius:"8px",margin:"2rem"}}/>
                        </div>
                    )
                })}
                </Col>
                <Col lg={4}>
                {/* style={{marginLeft:"3rem"}} */}
                <div >
                <img src={images[0]} style={{width:"25rem",borderRadius:"16px",margin:"2rem"}}/>
                <h3 >{title}</h3>
                <h4 style={{color:"#216ad9"}}>${price}</h4>
                <p style={{width:"95%"}}>{description}</p>
                <Button onClick={() =>{
                    if(id in cartItems){
                        const currentItem = cartItems[id];
                        handleAddCart({[id] : {title,price,quantity: currentItem.quantity +1}})
                    }else{
                        handleAddCart({[id]: {title,price,quantity: 1}})
                    }
                    // navigate("/cart")
                }}> Add to Cart</Button>
                </div>
                </Col>
                <Col lg={5}>
                <div >
                   <h2>Products under this category</h2> 
                   <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                {otherProducts.map((product) => {
                    if(product.id == id ) return
                    return(
                        <Card key={product.id} style={{width:"12rem",border:"none",padding:"1rem"}}>
                            <Card.Img src = { product.images[0]}/>
                            <Card.Title style={{marginTop:"0.5rem",fontSize:"1rem",fontWeight:"700"}} >{product.title.split(" ")[2]}</Card.Title>
                            <Card.Text style={{textAlign:"center",color:"#216ad9",fontWeight:"600"}}>${product.price}</Card.Text>
                            <Button 
                            onClick={() => navigate(`/PDetails/${product.id}`,{state:product})}
                            style= {{width:"7rem",marginLeft:"0.6rem",backgroundColor:"#216ad9"}}>View Item</Button>
                        </Card>
                    )
                })}
            </div>
                </div>
                </Col>
            </Row>
        </div>
    )
}