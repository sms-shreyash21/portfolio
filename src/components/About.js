import './About.css';
import MyImage from './myimage1.jpeg';
function About() {


    return (
        <div id='About'>
        <div className='about'>
            <div className="my-img1">
                <img className="my-image1" style={{ pointerEvents: 'none' }} src={MyImage}></img>
            </div>
            <div className='my-about'>
                <h1 className='about-me'>About Me .....</h1>
                I'm <span className='sms'>Shreyash</span>, an avid learner driven by insatiable curiosity. Learning and exploring new domains are the core of my life and career.
                My curiosity fuels deep dives into various subjects, seeking to unravel complexities. I seize each chance to enhance skills, whether probing emerging tech paradoxes or embracing novel opportunities.
                Investing in growth, I am determined to master my field's intricacies. Understanding broad industry concepts and their intersections empowers me to innovate and drive meaningful change.
                Sharing knowledge is my joy, as I believe learning thrives collectively. Engaging in discussions and aiding others' potential growth fulfills me. Celebrating team achievements is immensely rewarding.
                Let's collaborate on impactful projects. I'm drawn to like-minded individuals who value excellence, creativity, and lifelong learning. Together, we can ascend, fostering shared growth and prosperity!

            </div>
        </div>
        <div className='about'>
            
        </div>
        </div>
    );

}

export default About;