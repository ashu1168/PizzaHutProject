import React from 'react'
import Button from 'react-bootstrap/Button';
function Cartbutton({ food, filtercategory, displayprods }) {
  const cat = [...new Set(food.map((f) => f.category))]
  return (
    <div>
      <Button variant="dark"
        className='rounded-pill fs-5 me-4 my-5' style={{ width: "120px" }} onClick={() => displayprods()}>All</Button>
      {cat.map((c) => {
        return (
          <Button variant="dark"
            className='rounded-pill fs-5 me-4' style={{ width: "120px" }} onClick={() => { filtercategory(c) }}>{c}</Button>
        )
      })}
    </div>
  )
}

export default Cartbutton