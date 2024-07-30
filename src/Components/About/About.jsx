import React, { useEffect, useState } from 'react'

export default function About() {

  const [Count, setCount] = useState(0)
const [userName, setuserName] = useState('ahmed')

  function changeCount(){
    setCount(Math.random)
   
  }

  useEffect(()=>{
    console.log('component et3amal');
    return()=>{
      console.log('component about to');
    }
  },[])


  useEffect(() => {
    if(Count==0){
return
    }
  console.log('component did update');
  }, [Count])

  

  return <>
    <div key={1}>About</div>
    <div  key={2} className='text-center'>
  <h2> Count : {Count}</h2>
  <button onClick={()=>changeCount()} className='bg-green-500 p-2 m-2 rounded-xl'>Buttn</button>
    </div>
  </>
}
