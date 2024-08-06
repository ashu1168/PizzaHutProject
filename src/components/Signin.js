import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { FaLitecoinSign } from 'react-icons/fa6';
function Signin() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  function login(email,e)
  {
    let u={email,password}
      e.preventDefault()
       fetch("http://localhost:3000/users").then((resp1)=>{
         resp1.json().then((resp2)=>{
          console.log(resp2)
           resp2.map((r)=>{
             if(r.email===u.email && r.password===u.password)
             {
               localStorage.setItem("login",JSON.stringify(u))
             }
           })
         })
       })  
  }
  return (
    <div className='container text-start mt-5'>
         <h3 className='text-center mb-4'>Login Form</h3>
    <Form onSubmit={(e)=>login(email,e)}>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} className='w-50' onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" className='w-50'value={password}  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" className='mx-auto d-block'>
         Sign In
      </Button>
    </Form>       
    </div>
  )
}

export default Signin
