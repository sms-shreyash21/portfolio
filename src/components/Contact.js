import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {  FaLinkedin,FaGithub,FaTwitter } from 'react-icons/fa';
function Contact() {
    const form = useRef();
    const [isSubmitted,setIsSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v9vphtq', 'template_q1etv4a', form.current, 'iM-IRm5_1c8PJ9bJF')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='Contact'>
            
            <div className='my-cont'>
            <div className='cont'>
            <h1 className='cont-main-title'>Contact Me</h1>
                <a className='mail' onClick={() => window.location = 'mailto:contactwithsms@gmail.com'}>contactwithsms@gmail.com</a>
                <div className='icons1'>
                            <FaLinkedin size={30} className='my-icons1'  onClick={() => window.open('https://www.linkedin.com/in/shreyashshinde', '_blank')} />
                            <FaGithub size={30} className='my-icons1'  onClick={() => window.open('https://github.com/sms-shreyash21', '_blank')} />
                            <FaTwitter size={30} className='my-icons1'  onClick={() => window.open('https://twitter.com/sms_shreyash21?s=20', '_blank')} />
                </div>
            </div>
            <div className='form-class'>
                <h1 className='cont-main-title'>Send Message</h1>
                <form ref={form} onSubmit={sendEmail}>
                    
                    <input type="text" placeholder='Name' name="user_name" /> <br/>
                    
                    <input type="email" placeholder='E-mail' name="user_email" /> <br/>
                    
                    <textarea style={{height:'100px'}} placeholder='Description' name="message" /> <br/>
                    <input className='bu' type="submit" value="Submit" /> <br/>
                    {isSubmitted && (
                        <p>Form Submitted successfully!</p>
                    )}
                </form>
            </div>
            </div>
        </div>
    );

}

export default Contact;