import React, { useState } from 'react'
import Child from './../Child/Child';

export default function Parent() {
    const [Products, setProducts] = useState([
        {id:22,code:'Samsung',Price:2000,Count:55 ,onsale:true},
        {id:23,code:'MSi',Price:5800,Count:55 , onsale:false},
        {id:24,code:'Huawei',Price:4000,Count:567 ,onsale:true},
        {id:25,code:'Lenovo',Price:60000,Count:556 , onsale:false},
        {id:26,code:'Apple',Price:5550,Count:22, onsale:true},
        {id:27,code:'Toshiba',Price:888,Count:11, onsale:false},
        {id:28,code:'Sharp',Price:33332,Count:45, onsale:true},
        {id:55,code:'York',Price:10000,Count:88, onsale:false},
    ])

    function DeleteProduct(productId){
    let myProduct= structuredClone(Products)
  let newProduct= myProduct.filter((product)=> product.id !==productId)
  setProducts(newProduct)

    }


    function UpdateProduct(Index){
        let myProduct= structuredClone(Products)
        myProduct[Index].Count+=100
        setProducts(myProduct)
    }




  return <>
   
<div className="container">
<div className="row">
{Products.map((product,i)=>  <Child product={product} key={product.id} deleted={DeleteProduct}  updated={UpdateProduct} index={i} />)}   

</div>



</div>

           


    </>
 
}
