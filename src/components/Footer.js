import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-dark mt-5 text-white'>
        <Container>
             <div className='row mt-5 p-5'>
               <div className='col-4 link'>
                  <h3 className='mb-3' style={{fontFamily:'brush script mt'}}>Contact Us</h3>
                  <p> <Link to={''} className='text-white link'><FaLocationDot /> Location</Link></p>
                    <p><Link to={''} className='text-white link'><BsFillTelephoneFill />Call+01 123456780</Link></p>
                    <p><Link to={''} className='text-white link'>feame@gmail.com <FaEnvelope /></Link></p>
               </div>
               <div className='col-4'>
                  <h3><Link to={''} className='link text-white' style={{fontFamily:'brush script mt'}}>Feame</Link></h3>
                  <p>Necessary, making this the first true generator on the Internet. 
                    It uses a dictionary of over 200 Latin words, combined with</p>
                    <Link className='bg-white  fs-3 me-2 px-2 py-1 tag'><FaFacebookF/></Link>
                    <Link className='bg-white fs-3 me-2 px-2 py-1 tag'><FaTwitter/></Link>
                   <Link className='bg-white fs-3 me-2 px-2 py-1 tag'><FaLinkedinIn/></Link>
                   <Link className='bg-white fs-3 me-2 px-2 py-1 tag'><FaInstagram/></Link>
                  <Link className='bg-white fs-3 me-2 px-2 py-1 tag'><FaPinterestP/></Link>

                  <p className='pt-5'>© 2024 All Rights Reserved By Feame Restaurant</p>
                  <p className='pt-2'>© Distributed By Ashwini Raut</p>
               </div>
               <div className='col-4'>
                   <h3 style={{fontFamily:'brush script mt'}}>Opening Hours</h3>
                   <p>Everyday</p>
                   <p>10.00 Am -10.00 Pm</p>
               </div>
             </div>
        </Container>
       
    </div>
  )
}

export default Footer
