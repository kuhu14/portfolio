import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
//import { useState } from 'react';
import axios from 'axios'; //fetches data from node.js by calling api
export default function Content() {
    const Navigate = useNavigate();
    const handleCart = () =>{
    Navigate("/cart")
  }
  //needs to fetch and populate products array from mongodb through node.js once url loads
    const [products, setProducts] = useState([]) //created an array called products & have to call setProducts function to add anything to the array
    //const url = "http://localhost:8080/" //node.js url to be used
    const url ="https://backend-kues.onrender.com"
    const getData = async () =>{
        const respose = await axios.get(url) //takes a few extra milliseconds to get data from api
        setProducts(respose.data)
    }
    const deleteProduct = async (id) => { //async is the parent keword for the syntax await
      await axios.delete(url+id) //modify according to node.js file
      getData()
      }
    useEffect(()=>{
        getData()
    },[]) //react.js hook
    // const products = [
    //     {name: "Product 1", price: 35, url: "https://picsum.photos/id/1/200/200"},
    //     {name: "Product 2", price: 45, url: "https://picsum.photos/id/2/200/200"},
    //     {name: "Product 3", price: 55, url: "https://picsum.photos/id/3/200/200"}
    // ]
  return (
    <div style = {{display:"flex", justifyContent:"center", flexWrap: "wrap"}}>
        {products.map((value, index) => (
            <div key={index} style={{backgroundColor: "cyan", margin: "10px", padding: "20px"}}>
                <img src={value.url}></img>
                <h2 >{value.name}</h2>
                <h3>${value.price}</h3>
                <button onClick={handleCart}>Add to Cart</button>
                <button onClick={()=>deleteProduct(value._id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}
