import { Button } from '@mui/material';
import React from 'react';
import './OurClasses.css';
import { Link } from 'react-router-dom';

const OurClasses = () => {

    return (
        <main className='ourClasses'>
            <section>
                <section>
                    <Link to='/physioTraining'>
                        <Button className='classBtn' style={{color: 'black'}}>PHYSIO TRAINING </Button>
                    </Link>
                </section>
                <section>
                    <Link to='/selfDefense'>
                        <Button className='classBtn' style={{color: 'black'}}>SELF DEFENSE</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/advanceGym'>
                        <Button className='classBtn' style={{color: 'black'}}>ADVANCE GYM</Button>
                    </Link>
                </section>
            </section>
            <section>
                <section>
                    <Link to='/cardioTraining'>
                        <Button className='classBtn' style={{color: 'black'}}>CARDIO TRAINING</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/strengthTraining'>
                        <Button className='classBtn' style={{color: 'black'}}>STRENGTH TRAINING</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/physioTraining2'>
                        <Button className='classBtn' style={{color: 'black'}}>PHYSIO TRAINING</Button>
                    </Link>
                </section>
            </section>
        </main>
    );
};

export default OurClasses;