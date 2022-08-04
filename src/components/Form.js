import React from 'react';
import './Form.css'

function Form() {
  return (
    <>
    <section className="main_sec">
    <div className="btn_div">
        <button>LOG IN</button>
        <button>SIGN UP</button>
    </div>
    <p style={{fontSize:"14px"}}>&nbsp;Shipping information</p>
    <div className='input_div'>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='City' />
        <input type="text" placeholder='Last Name' />
        <input type="text" placeholder='Postal Code / Zip' />
        <input type="text" placeholder='Phone Number' />
        <select name="" id="">
            <option value="Poland">Poland</option>
            <option value="Poland">UK</option>
            <option value="Poland">US</option>
        </select>
    </div>
    </section>
   
    </>
  )
}

export default Form