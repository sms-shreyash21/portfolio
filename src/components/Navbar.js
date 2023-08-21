import { Component } from "react";
import './Navbar.css';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
class Navbar extends Component {
    state = { clicked:false }
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    } 
    render() { 
        return (
            <BrowserRouter>
            <nav className="navbar">
            <h1 className="logo">Shreyash</h1>
           
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                <ul className={this.state.clicked ? "list active" : "list"}>
                    <li>
                        <Link to='#Home' className="anchor-tag" >Home</Link>
                    </li>
                    <li>
                        <Link to='#About' className="anchor-tag" >About</Link>
                    </li>
                    <li>
                        <Link to='#Projects' className="anchor-tag" >Projects</Link>
                    </li>
                    <li>
                        <Link to='#Activities' className="anchor-tag" >Activities</Link>
                    </li>
                    <li>
                        <Link to='#Contact' className="anchor-tag" >Contact</Link>
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