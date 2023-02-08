import React from 'react';
import './Home.css';
import group1 from '../../images/mainBody/Group-1.png';
import group2 from '../../images/mainBody/Group-2.png';
import group3 from '../../images/mainBody/Group-3.png';
import aboutUs from '../../images/mainBody/about-us.jpg';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import choose1 from '../../images/mainBody/choose-1.png';
import choose2 from '../../images/mainBody/choose-2.png';
import choose3 from '../../images/mainBody/choose-3.png';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Home = () => {
    return (
        <main className='mainBody'>
            <section>
                <section>
                    <div>
                        <img src={group1} alt="" />
                        <h2>PROGRESSION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group2} alt="" />
                        <h2>WORKOUT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group3} alt="" />
                        <h2>NUTRITION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
            </section>
            <section className='aboutUs'>
                <img src={aboutUs} alt="" />
                <div>
                    <h1>ABOUT US</h1>
                    <h2><span style={{ color: 'goldenrod' }}>WE ARE HERE TO DREAM!</span><br />OUR TEAM IS HERE SERVE YOU.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed molestiae animi soluta, libero aut doloribus ex dolorum facilis deserunt pariatur possimus praesentium eligendi cumque enim at accusantium! Magni fuga adipisci quis sequi ab error, repellendus sit neque eligendi cumque odio.</p>
                </div>
            </section>
            <section className='programs'>
                <h2>TRAINING <span style={{ color: 'goldenrod' }}>PROGRAMS</span></h2>
                <div className='programsOption'>
                    <div>
                        <Button style={{color: 'black'}}>YOGA TRAINING SESSION <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} /></Button>
                    </div>
                    <div>
                        <Button style={{color: 'black'}}>CARDIO TRAINING SESSION <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} /></Button>
                    </div>
                </div>
                <Link to='/program' style={{textDecoration:'none'}}><Button style={{ background: 'goldenrod',color:'black', marginTop:"25px",fontSize:"20px",  borderRadius:"0px",padding:'15px' }}>View More</Button></Link>
            </section>
            <section className='chooseUs'>
                <h2><span style={{ color: 'goldenrod' }}>WHY</span> CHOOSE US</h2>
                <div className='chooseUsOption'>
                    <div>
                        <div>
                            <img src={choose1} alt="" />
                            <h3>FREE FITNESS TRAINING</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias quis, magnam nulla architecto facere sint nostrum inventore incidunt provident.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={choose2} alt="" />
                            <h3>TONS OF CARDIO & STRENGTH</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias quis, magnam nulla architecto facere sint nostrum inventore incidunt provident.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={choose3} alt="" />
                            <h3>NO COMMITMENT MEMBERSHIP</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias quis, magnam nulla architecto facere sint nostrum inventore incidunt provident.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;