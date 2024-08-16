import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

export default function Booking(props) {
  // const history=useNavigate();

    const [email,setEmail]=useState('')

    async function submit(e){
      e.preventDefault();

      try{
          console.log("-------------------------");
          console.log("Inisde Submit of booking");
          await axios.post("http://localhost:5000/api/v1/products",{
            "name":"Laptop from FE",
            "description":"Laptop Desc",
            "price":150,
            "color":"Black",
            "brand":"Dell"
        
        })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  // history("/home",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

    }
 
    return (
    <>
    <div className='container'>
  <div className='row'>
    <div className='col-md-6 mt-5 pt-5'>
      <div className='col-md-12 rounded' style={{background:"#11202a"}}>
        <p style={{fontSize:"49px",color:"white"}} className='ms-5 pt-4'>{props.b1}</p>
        <input type='text' placeholder='Name*' className='col-md-10 ms-5 rounded mt-4 col-10' style={{height:"50px"}}/>

        <input type='text' placeholder='Email*' className='col-md-10 ms-5 rounded mt-4 col-10' style={{height:"50px"}}/>
        <textarea className='col-md-10 col-10 ms-5 mt-4 rounded' style={{height:"150px"}} placeholder='Message'></textarea>
        <button 
        type="submit" onClick={submit} 
        className='mt-4 ms-5 col-md-2 mb-5 rounded'
        style={{backgroundColor:"#ffd014",border:"none",height:"35px",color:"white"}}>SEND</button>
      </div>
    </div>
    <div className='col-md-6 mt-5 pt-5'>

      <div className='col-md-12 col-12'>
        
        {/* <center className='mt-5 pt-5' id="Booking" id='Booking1' style={{fontSize:"28px"}}>Ask Your Queries</center> */}
        <center style={{fontSize:"17px"}} className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br/> tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</center>
        <center className='mt-4'>Or</center>
   <center>
   <button className='mt-4  col-md-5 mb-5  rounded'  style={{backgroundColor:"#ffd014",border:"none",height:"35px",color:"white"}}>MAKE A BOOKING</button>
    </center>     
      </div>
    </div>
  </div>
</div>

<div className='col-md-12 col-12 mt-5 pt-5' style={{background:"#11202a"}}>

  <div className='mt-5'> <center><img src='img/1.png'/></center>  </div>
  <div className='mt-4'><center> <a href='#About' className='ms-3' style={{textDecoration:"none",Color:"white"}}>aboutus</a> <a href='#Amenities' className='ms-3'> Amenities</a> <a href='#Gallery' className='ms-3'>Gallery</a> <a href='#Packages' className='ms-3'>Packages</a> <a href='#Booking' className='ms-3'>Booking</a> </center></div>

<div className='mt-5 text-center'><span className='text-light'style={{fontSize:"25px"}}>{props.b2}</span> <span className='ms-5 text-light' style={{fontSize:"25px"}}>info@domain.com</span> <span className='ms-5 text-light' style={{fontSize:"25px"}}>34-D, Greenville, NJ</span> </div>

<hr className='mt-5'/>
<div className='text-center text-light pb-5' style={{fontSize:"20px"}}>Copyright © 2024 Hotel and BnB | Powered by Hotel and BnB</div>
</div>
    </>
  )
}
