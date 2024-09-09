import React, { useEffect, useState } from "react";
import axios from "axios"
import {Card,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

export default function ProductGallery () {
    const [products,setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        async function getProduct () {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=40");
            // console.log(response.data);
            setProducts(response.data)
        }
        getProduct()
    },[])

    return(
        <div>
            <h2 style={{margin:"1.5rem",marginLeft:"3.5rem"}}><i>SELECT A PRODUCT ADD TO CART</i></h2>
            <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                {products.map((product) => {
                    return(
                        <Card key={product.id} style={{width:"22rem",border:"none",padding:"1rem"}}>
                            <Card.Img src = { product.images[0]}/>
                            <Card.Title style={{marginTop:"0.5rem",fontSize:"1rem",fontWeight:"700"}} >{product.title}</Card.Title>
                            <Card.Text style={{textAlign:"center",color:"#216ad9",fontWeight:"600"}}>${product.price}</Card.Text>
                            <Button 
                            onClick={() => navigate(`/PDetails/${product.id}`,{state:product})}
                            style= {{width:"50%",marginLeft:"4.6rem",backgroundColor:"#216ad9"}}>View Item</Button>
                        </Card>
                    )
                })}
            </div>
        </div>

    );
}