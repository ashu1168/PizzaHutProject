import React from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaCartShopping } from "react-icons/fa6";
function Booking() {
  return (
    <div>
         <Container>
        <div className='row pt-5 pb-5'>
          <div className='col-md-6'>
          <Form>
           <h1 style={{fontFamily:'brush script mt'}} className='text-start'>Book A Table</h1>   
           <input type='text'  className='' required placeholder='Your name'/><br/><br/>
           <input type='number' className=''  retuired placeholder='Phone number'/><br/><br/>
           <input type='email' required placeholder='Your Email'/><br/><br/>
          
           <select className='select'>
            <option>How Many Persons</option>
            <option>2</option>
            <option>4</option>
            <option>5</option>
           </select><br/><br/>
           <input type='date' required placeholder='mm/dd/yyyy'/><br/><br/>
           <Button variant="warning" className='text-white fs-5 px-4 rounded-pill float-start'>Book Now<FaCartShopping /></Button>
          </Form>
          </div>
            <div className='col-md-6'>
               <html className='pt-5'>
                   {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.058767620369!2d73.84005677514354!3d18.526246269000996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c150b2559ccd%3A0x515cbe6405a0ce09!2sSevenMentor%20Pvt%20Ltd%20Java%20AngularJS%20MeanStack%20Classes!5e0!3m2!1sen!2sin!4v1711079633536!5m2!1sen!2sin" style={{width:'550px',height:'350px',border:'0'}} allowfullscreen="" className='rounded' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.150261658929!2d73.8385502751434!3d18.522110669127258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf873169c1c7%3A0xcbc65363094db56d!2sPizza%20Hut!5e0!3m2!1sen!2sin!4v1711103326134!5m2!1sen!2sin" style={{width:'550px', height:"350px",border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
               </html>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Booking
