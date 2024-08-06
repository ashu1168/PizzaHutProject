import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


function Signup() {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function adduser(e){
      e.preventDefault()
      let user={name,phone,email,password}
      fetch("http://localhost:3000/user",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
    }
  return (
    <div>
        <Container>
                <div className='row' style={{margin:"200px 0px"}}>
                <h1 className='my-3' style={{fontFamily:"Dancing Script"}}>Sign Up</h1>

                    <div className='col-md-6 col-sm-12'>
                      <form onSubmit={adduser}>
                        <input type="text" className='form-control py-3 my-4' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Name'/>
                        <input type="number" className='form-control py-3 my-4' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Enter Number'/>
                        <input type="text" className='form-control py-3 my-4' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email'/>
                        <input type='password' className='form-control py-3 my-4' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
                        <button className='py-3 px-4 text-white border-0 rounded-pill' style={{backgroundColor:" rgb(80, 242, 20)"}}>Submit</button>
                      </form>
                    </div>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <img src='./images/f6.png' alt=''/>
                    </div>
                </div>
            </Container>
    </div>
  )
}

export default Signup