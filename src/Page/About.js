import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='col-md-12 col-12 text-center ' ><p style={{fontSize:"48px"}} className='mt-5 pt-5 ' id='About' id='about1'>About Us</p><p style={{fontSize:"17px"}} className='pb-5'>{props.a1}</p></div>

<div className='container-fluid'>
  <div className='container-fluid'>
    <div className='container-fluid'>
      <div className='container-fluid'>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-md-6 '>
            <div className='col-md-12  pb-5 mb-5 pb-5 '>
            <img src="img/2.jpg" className='col-md-12 col-12  rounded-2'  />
            </div>
          </div>
          <div className='col-md-6'>
<div className='col-md-12 col-12 pb-5 mb-5 pb-5 '>
  <p  className='mt-5 ms-5 'style={{fontSize:"29px"}}>{props.a2}</p>
  <p className='ms-5 col-12'><b>Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod<br></br> magna, eu vehicula tellus feugiat ac.</b></p>
  <p className='ms-5 col-12'style={{fontSize:"17px"}}>{props.a3}
</p>
</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>
    </>
  )
}
