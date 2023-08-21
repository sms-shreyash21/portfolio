// import { Component } from "react";
// import { div,Row,Col } from "react-bootstrap";

import { useEffect, useState } from 'react';
import './Home.css';
import MyImage from './shre.jpg';
import {  FaLinkedin,FaGithub,FaTwitter } from 'react-icons/fa';

function Home  () {
        const [loopNum,setLoopNum] = useState(0);
        const [isDeleting,setIsDeleting] = useState(false);
        const toRotate = ["Java Programming","Machine Learning","Python Programming","React Web Development","Artificial Intelligence","Space Science"];
        const [text,setText] = useState('');
        const [delta,setDelta] = useState(300 - Math.random()*100);
        const period = 500;

        useEffect(()=>{
            let ticker = setInterval(()=>{
                tick();
            },delta)

            return ()=>{clearInterval(ticker)}
        },[text])

        const tick = () =>{
            let i = loopNum%toRotate.length;
            let fulltext = toRotate[i];
            let updatedText = isDeleting ? fulltext.substring(0, text.length-1) : fulltext.substring(0, text.length+1);
            setText(updatedText);

            if(isDeleting){
                setDelta(prevDelta => prevDelta/2)
            }
            if(!isDeleting && updatedText === fulltext){
                setIsDeleting(true);
                setDelta(period);
            }
            else if(isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(150);
            }

        }
        return(
            <div className="home" id='Home'>
                
                    <div className="my-name">
                        <h2 className="tagline">Welcome to my Portfolio! <br/>
                        Hi! I'm <span className='name'>Shreyash Shinde </span>
                        A <h2><span className="wrap"> "{text}"</span></h2>  Enthusiast.</h2>
                        <div className='icons'>
                            <FaLinkedin size={50} className='my-icons'  onClick={() => window.open('https://www.linkedin.com/in/shreyashshinde', '_blank')} />
                            <FaGithub size={50} className='my-icons'  onClick={() => window.open('https://github.com/sms-shreyash21', '_blank')} />
                            <FaTwitter size={50} className='my-icons'  onClick={() => window.open('https://twitter.com/sms_shreyash21?s=20', '_blank')} />
                        </div>
                    </div>
                    <div className="my-img">
                        <img className="my-image" style={{pointerEvents: 'none'}} src={MyImage}></img>
                    </div>
                    
               
            </div>
        );
    
}
 
export default Home;