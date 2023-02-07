import React from 'react';
import './Home.css';
import group1 from '../../images/mainBody/Group-1.png';
import group2 from '../../images/mainBody/Group-2.png';
import group3 from '../../images/mainBody/Group-3.png';
import aboutUs from '../../images/mainBody/about-us.jpg';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import choose1 from '../../images/mainBody/choose-1.png';
import choose2 from '../../images/mainBody/choose-2.png';
import choose3 from '../../images/mainBody/choose-3.png';

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
            
        </main>
    );
};

export default Home;