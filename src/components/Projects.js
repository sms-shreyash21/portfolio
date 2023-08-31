import './Projects.css';
import EcoLogo from './images/eco-home-logo.png';
import SLR from './images/slr.png';
import OPP from './images/opp.png';
function Projects() {


    return (
        <div id="Projects">
            <h1 className='proj-main-title'>My Projects ....</h1>
            <div>
                <h2 className='proj-main-title'>ECO-HOME</h2>
                <div className='proj'>
                    <div className="my-img2">
                        <img className="my-image2" style={{pointerEvents: 'none'}} src={EcoLogo} alt='Logo'></img>
                    </div>
                    <div className='my-projects'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        The ECO-HOME is a specialized web application developed to aid users in evaluating the practicality of installing a solar panel system. Through the utilization of location-specific weather data and solar radiation information, the application conducts an in-depth analysis to estimate crucial factors such as energy output, system size, and the number of panels required. By taking into account the user's specific roof area, electricity requirements and weather at given location, the application generates a comprehensive report that provides valuable insights into the feasibility of solar panel installation and basic information required for Rainwater Harvesting system installation. <br/>
                        <button className='bu1' onClick={() => window.open('https://sms-shreyash21.github.io/ecohome/', '_blank')}>Visit Website</button>

                    </div>
                </div>
            </div>
            <div>
                <h2 className='proj-main-title'>Sign Language Recognition</h2>
                <div className='proj'>
                    
                    <div className='my-projects'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        In this project, we developed a system that can accurately recognize and translate sign language gestures into written or spoken language. This technology can be used to facilitate communication between deaf or hard-of-hearing individuals and the rest of the population, allowing them to participate more fully in society. Sign language recognition can also be used to improve accessibility in various settings such as education, healthcare, and entertainment. By recognizing sign language, this technology can help to break down barriers and promote inclusion for people with hearing disabilities.
                    </div>
                    <div className="my-img2">
                        <img className="my-image2" style={{pointerEvents: 'none'}} src={SLR} alt='Logo'></img>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='proj-main-title'>Online Permission Portal</h2>
                <div className='proj'>
                    <div className="my-img2">
                        <img className="my-image2" style={{pointerEvents: 'none'}} src={OPP} alt='Logo'></img>
                    </div>
                    <div className='my-projects'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        The "Online Permission Portal" project aims to address this need by providing a user-friendly web-based platform for students to submit permission requests to college authorities. This comprehensive project leverages a combination of front-end technologies such as HTML, CSS, and JavaScript, along with back-end capabilities powered by PHP. The Online Permission Portal facilitates a seamless interaction between students and college authorities, reducing the manual effort required for managing permission requests. This web application's design encompasses an intuitive and accessible user interface, ensuring ease of use for students from diverse technical backgrounds. By employing interactive elements and form validation through JavaScript, the portal enhances user experience and minimizes errors during submission.                    
                        </div>
                </div>
            </div>
        </div>
    );

}

export default Projects;