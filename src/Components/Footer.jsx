import React from 'react'
import {
    MDBFooter
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='white' className='text-center text-left' style={{color:'#63E6BE'}}>
      <div className='text-center p-3' >
        &copy; {new Date().getFullYear()} @:{' '}
        <a style={{color:'#63E6BE'}} href='https://mdbootstrap.com/'>
          CounterApp.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
