import './Activities.css';
import Genius from './images/genius.JPG';
import Sympo from './images/sympo.jpg';
import Vipassana from './images/vipassana.jpg';
import amIeng from './images/amieng.jpg';
import EVS from './images/EVS.jpg';
import AISA from './images/aisa.jpg';
import Freshers from './images/freshers.JPG';
function Activities (){
    
    return (
        <div id="Activities">
            <h1 className='acti-main-title'>My Activities ....</h1>
            <div>
                <h2 className='acti-main-title'>Vice-President AISA (Artificial Intelligence students Association)</h2>
                <div className='acti'>
                <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={AISA} alt='Logo'></img>
                    </div>
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        From September 2022 to August 2023, I served as the Vice President of AISA at my college. During this year-long tenure, I successfully coordinated a diverse range of both technical and non-technical events under the AISA. This experience enabled me to contribute significantly to the enrichment of our academic community and the development of various skill sets among the students.
                    </div>
                    
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>DKTE Genius Competition 2K22 and 2K23</h2>
                <div className='acti'>
                    
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        I actively competed in the Genius competition at my college DKTE's Textile and Engineering Institute's annual festival in 2022 and 2023, securing finalist positions in both instances. The competition focused on testing participants' General Knowledge and communication skills. My consistent success underscores my prowess in effectively conveying information, making me a valued contender in events demanding intellectual acumen and eloquence. <br/>

                    </div>
                    <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={Genius} alt='Logo'></img>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>Tech-Symposium 2K23</h2>
                <div className='acti'>
                <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={Sympo} alt='Logo'></img>
                    </div>
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        As a dedicated coordinator of the national-level Tech-symposium event at DKTE College, I contributed to its success by orchestrating seamless organization and collaboration. My role involved liaising with participants, overseeing logistics, and ensuring smooth execution. This experience honed my leadership skills and solidified my passion for technical events and efficient teamwork.
                    </div>
                    
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>Am I Engineer???</h2>
                <div className='acti'>
                    
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        Serving as Vice-President of the AISA student club, I co-ordinated the event named "Am I Engineer" on Engineer's Day. The event underscored the pivotal role engineers play in today's world, combining insightful discussions and engaging activities. This experience strengthened my leadership abilities and dedication to fostering a thriving academic community.                    
                        </div>
                        <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={amIeng} alt='Logo'></img>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>Environmental Visit to Radhanagari Wildlife sanctuary</h2>
                <div className='acti'>
                <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={EVS} alt='Logo'></img>
                    </div>
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        In the Second Year of my Engineering as the curriculum included Environmental Studies and Visit, we visited to Radhanagari Wildlife Sanctuary. The Environmental Visit was an enriching experience where participants had the opportunity to connect with nature and understand the importance of wildlife conservation. Exploring the sanctuary's diverse ecosystems, observing native flora and fauna, and learning about the delicate balance of the environment fostered a deeper appreciation for our natural world. I also helped in organizing the Visit.
                    </div>
                    
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>Vipassana Meditation Camp</h2>
                <div className='acti'>
                    
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        In January 2023, I embarked on a transformative journey by participating in a 10-day Vipassana meditation camp organized by <span style={{fontSize:'20px',color:'#4db5ff',cursor:'pointer'}} onClick={() => window.open('https://www.dhamma.org/', '_blank')}>dhamma.org</span>. This immersive experience offered profound tranquility and personal growth. Engaging in the practice of Vipassana meditation, amidst serene surroundings, brought about a deep sense of peace and left an indelible positive impact on me.                    
                        </div>
                        <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={Vipassana} alt='Logo'></img>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='acti-main-title'>Fresher's Party 2K23</h2>
                <div className='acti'>
                <div className="my-img3">
                        <img className="my-image3" style={{pointerEvents: 'none'}} src={Freshers} alt='Logo'></img>
                    </div>
                    <div className='my-activities'>
                        {/* <h1 className='about-me'>About Me .....</h1>  */}
                        As the Vice President of AISA, I took on the pivotal role of organizing the Freshers Party 2K23, a significant event tailored for CSE-AI and AIDS students. With full responsibility, I ensured the event's successful planning and execution, creating a welcoming and memorable experience for the incoming students while fostering a sense of community within the department.
                    </div>
                    
                </div>
            </div>
        </div>
    );
    
}
 
export default Activities;