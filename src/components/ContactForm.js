import React, { useState } from 'react';
import axios from 'axios';

const ContactForm =()=>{

    
  const [formData, setFormData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formData,"<=========formData");



    try{
                await axios.post('https://portfolio-bil8.onrender.com/contact',formData)
                        .then((response)=>{console.log(response,"<---response")})
                        .catch((error)=>{console.log(error,"<---error")});
                
                
                // console.log(result,"result");
            }catch(error){
                // handleError(error);
                console.error(error);
            }

    // const result = await res.json();
    
  }
  
  return(
    <div className="contact-form">
    <h1>Contact Us</h1>
  <form action="/" method="POST" onSubmit={handleSubmit}>
    <label for="name">Name:</label><br/>
    <input type="text" id="name" name="name" required onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/><br/><br/>

    <label for="email">Email:</label><br/>
    <input type="email" id="email" name="email" required onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/><br/><br/>

    <label for="message">Message:</label><br/>
    <textarea id="message" name="message" required onChange={(e)=>{setFormData({...formData,message:e.target.value})}}></textarea><br/><br/>

    <button type="submit">Submit</button>
  </form>
  </div>
    )
}

export default ContactForm;