import React from 'react'

export default function Child(props) {


  let{id,code,Price,Count,onsale}=props.product

  return <>
  <div className="w-1/4 p-4">
  <div className=' bg-blue-500 rounded-lg shadow-lg p-4 text-white relative'>
  <h5>id : {id}</h5>
  <h4>Name : {code}</h4>
  <h4>price : {Price}</h4>
  <h4>count : {Count}</h4>
  {onsale ?(
 <div className='bg-red-600 text-white p-2 rounded-lg top-0 left-0 absolute'>OnSale</div>
  ) : null}
  <button className='bg-green-500 rounded-lg p-3' onClick={()=> props.deleted(id)}>Delete</button>
  <button className='bg-orange-500 rounded-lg p-3 mx-2' onClick={()=>props.updated(props.index)} >Update</button>

    </div>
    </div>
  </>
}
