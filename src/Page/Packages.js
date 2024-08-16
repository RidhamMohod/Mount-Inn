import React from 'react'

export default function Packages(props) {
  return (
    <>
    <div className='col-md-12 col-12 '>
   <div className='pt-5'> <p className='text-center pt-5 ' id='Packages'  id='Packages1' style={{fontSize:"49px"}}>Packages</p></div>
    <p className='text-center pb-4' style={{fontSize:"16px"}}>{props.p1}</p>
  </div>

  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='row'>
        <div className='col-md-6'>
          <div className='bi16 rounded' style={{padding:"0px"}}>
            <p style={{height:"200px"}}></p>
          <p style={{background:"black",height:"40px",color:'white'}}>$ 125 / Night</p>
          </div>
        </div>
        <div className='col-md-6' style={{background:"white"}}>
          <p style={{fontSize:"23px"}} className='ms-3 mt-4' >{props.p2}</p>
          <p className='ms-3'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>

        
        </div>
      </div>

      <div className='col-md-6'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='bi17 rounded' style={{padding:"0px"}}>
        <p style={{height:"200px"}}></p>
          <p style={{background:"black",height:"40px",color:"white"}}>$ 125 / Night</p>
          </div>
        </div>
        <div className='col-md-6' style={{background:"white"}}>
          <p style={{fontSize:"23px"}} className='ms-3 mt-4' >Executive Suite</p>
          <p className='ms-3'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>

        
        </div>
      </div>
    </div>
  </div>

  <div className='container mt-5'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='row'>
        <div className='col-md-6'>
          <div className='bi16 rounded' style={{padding:"0px"}}>
          <p style={{height:"200px"}}></p>
          <p style={{background:"black",height:"40px",color:"white"}}>$ 125 / Night</p>
          </div>
        </div>
        <div className='col-md-6' style={{background:"white"}}>
          <p style={{fontSize:"23px"}} className='ms-3 mt-4' > Single Room</p>
          <p className='ms-3'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>

        
        </div>
      </div>

      <div className='col-md-6'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='bi17 rounded' style={{padding:"0px"}}>
        <p style={{height:"200px"}}></p>
          <p style={{background:"black",height:"40px",color:"white"}}>$ 125 / Night</p>
          </div>
        </div>
        <div className='col-md-6 ms-' style={{background:"white",}}>
          <p style={{fontSize:"23px"}} className='ms-3 mt-4' >Executive Suite</p>
          <p className='ms-3'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
        </div>

        
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
