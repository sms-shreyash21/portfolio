import { Component, useRef } from "react";
import './Navbar.css';
import Logo from './images/logo.png';
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";

class Navbar extends Component {
    state = { clicked:false }
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    } 
    render() { 
        return (
            <BrowserRouter>
            <nav className="navbar">
            {/* <h1 className="logo">Shreyash</h1> */}
            <img src={Logo} alt="loading..." style={{height:'80px'}} />

           
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                <ul className={this.state.clicked ? "list active" : "list"}>
                    <li>
                        <Link to='Home' spy={true} smooth={true} offset={0} duration={1000} className="anchor-tag" >Home</Link>
                    </li>
                    <li>
                        <Link to='About' spy={true} smooth={true} offset={0} duration={1000} className="anchor-tag" >About</Link>
                    </li>
                    <li>
                        <Link to='Projects' spy={true} smooth={true} offset={0} duration={1000} className="anchor-tag" >Projects</Link>
                    </li>
                    <li>
                        <Link to='Activities' spy={true} smooth={true} offset={0} duration={1000} className="anchor-tag" >Activities</Link>
                    </li>
                    <li>
                        <Link to='Contact' spy={true} smooth={true} offset={0} duration={500} className="anchor-tag" >Contact</Link>
                    </li>
                    <li>
                        <Link onClick={()=> window.open('https://drive.google.com/file/d/1g9jqwI1NbJP_-mdlSiGGyO_y3fCoMrOf/view?usp=drive_link', '_blank')}  className="anchor-tag" >Resume</Link>
                    </li>
                    
                </ul>
            </nav>
            </BrowserRouter>
        );
    }
}
 
export default Navbar;