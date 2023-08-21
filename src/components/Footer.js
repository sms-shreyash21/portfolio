import React, {Component} from "react";
import './Footer.css';
import {  FaLinkedin,FaGithub,FaTwitter } from 'react-icons/fa';
class Footer extends Component {
    state = {}
    render() {
        return (
            <div className='row'>
                <p className="foot">
                    {/* <hr /> */}
                    &copy;{new Date().getFullYear()} Shreyash Shinde | All rights reserved 
                    {/* |
                    Terms Of Service | Privacy */}
                    
                </p>
            </div>
        );
    }
}

export default Footer;