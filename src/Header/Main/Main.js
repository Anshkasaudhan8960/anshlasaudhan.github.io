import React from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.css';

function Main() {
  return (
   <div className=' container-fluid bg-black d-flex'>
    <div className='fs-0 fw-bold login_main ms-5'>
      <span className='p-1 login_1'>SignUp</span>
      <span className='p-1'>|</span>
      <span className='p-1 login_2'>Login</span>
    </div>
    <div></div>
    <div className='d-flex icon_main '>
      <div>
      <i class="fa-brands fa-instagram"></i>
      </div>
      <div>
      <i class="fa-brands fa-twitter"></i>
      </div>
      <div>
      <i class="fa-brands fa-linkedin"></i>
      </div>
      <div>
      <i class="fa-brands fa-facebook"></i>
      </div>
      <div>
      <i class="fa-brands fa-youtube"></i>
      </div>

    </div>
   </div>
  )
}

export default Main