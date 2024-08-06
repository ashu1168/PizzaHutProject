import React from 'react'
// import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaCartShopping } from "react-icons/fa6";
// import Row from 'react-bootstrap';
// import Col from 'react-bootstrap';
function About() {
  return (
   <div>
        <div className='about-img bg-dark mt-5 mb-5'>
        <div className='row '>
            <div className='col-md-6 about-img'>
                <img src="./images/about-img.png"  className='w-50 h-100 ' alt=''/>
            </div>
            <div className='col-md-6 text-white text-start about-p'>
               <h1 style={{fontFamily:"brush script mt", paddingTop:'200px'}}>We Are Feane</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                  or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                  <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Read More<FaCartShopping /></Button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About
