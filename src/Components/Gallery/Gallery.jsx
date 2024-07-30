import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Gallery() {
  return <>
  <h1 className='text-center text-5xl'>Gallery component</h1>
    <div className="container">
      <div className='row flex-row'>
      <div className="w-1/4">
        <ul>
          <li><Link to='web'>web</Link></li>
          <li><Link to='mobile'>mobile</Link></li>
        </ul>
      </div>
      <div className="w-3/4">
      <Outlet/>
      </div>
      </div>
    </div>
  </>
}
