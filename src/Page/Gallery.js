import React from 'react'

export default function Gallery(props) {
  return (
    <>
    
<div className='col-md-12 mt-5 col-12'>
  <center id='Gallery' id='Gallery1' style={{fontSize:"48px"}}>{props.g2}</center>
  <center className='mt-2' style={{fontSize:"16px"}}>{props.g1}</center>
</div>
<div className='container'>
  <div className='row'>
    <div className='col-md-3 mt-5 pb-5 mb-5'>
      <div className='col-md-12 '>
        <div className='bi12 rounded pb-5'></div>
      </div>
    </div>
    <div className='col-md-3 mt-5 pb-5 mb-5'>
      <div className='col-md-12'>
        <div className='bi13 rounded'></div>
      </div>
    </div>
    <div className='col-md-3 mt-5 pb-5 mb-5'>
      <div className='col-md-12'>
        <div className='bi14 rounded'></div>
      </div>
    </div>
    <div className='col-md-3 mt-5 pb-5 mb-5'>
      <div className='col-md-12 '>
        <div className='bi15 rounded'></div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
