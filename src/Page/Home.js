import React from 'react'

export default function Home(props) {
  return (
    <>
    <div className='bi1 col-md-12  col-12'>
    <div style={{background:'#000000b8',height:"600px"}}>
   <center>
   <div className="col-md-4">
<img src="img/1.png" className='mt-4 '/>
  </div>
   </center>
   <center className='mt-5'>
    <div className='col-md-4 col-12 text-center'>
    <a href='#about1'><button style={{border:"none",background:"none "}} className='ab'>About Us</button></a>
    <a href='#Amenities'><button style={{border:"none",background:"none"}}className='ms-3 ab'>Amenities</button></a>
    <a href='#Gallery1'><button style={{border:"none",background:"none"}}className='ms-3 ab'>Gallery</button></a>
    <a href='#Packages1'><button style={{border:"none",background:"none"}}className='ms-3 ab'>Packages</button></a>
   <a href='#Booking1'><button style={{border:"none",background:"none"}}className='ms-3 ab'>Booking</button></a>
   </div>
   </center>
   
   <center style={{fontSize:"80px",color:"white"}}className='mt-5 col-md-12 col-12'>{props.t1}</center>
   <center style={{fontSize:"21px",color:"white"}}className='mt-2 col-md-12 col-12'>{props.h1}</center>
    <center className='col-md-12 col-12 mt-5 '> <button style={{border:"none",background:"#ffd014",color:"white"}} className='p-3 rounded-2'>{props.h2}</button> </center>
   </div>
   </div>
    
    </>
  )
}
