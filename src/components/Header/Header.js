import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link, useLocation } from "react-router-dom";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ITEM_HEIGHT = 48;

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isHomeSection, setIsHomeSection] = useState(false);
    const [sectionText,setSectionText] = useState('')
    const {pathname} = useLocation()
    const open = Boolean(anchorEl);

    useEffect(()=>{
        if(pathname==='/'){
            setIsHomeSection(true)
        }
        if(pathname==='/ourClasses'){
            setIsHomeSection(false)
            setSectionText('Our Classes')
        }
        if(pathname==='/pricing'){
            setIsHomeSection(false)
            setSectionText('Pricing')
        }
    },[pathname])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='header'>
            <nav className="navBar">
                <h2>POWER <span style={{ color: "goldenrod" }}>X</span> </h2>
                <section className='navOption'>
                    <p><Link to='/' style={{ color: 'goldenrod' }}>Home</Link></p>
                    <p><Link to='/ourClasses'>Our Classes</Link></p>
                    <p><Link to='/pricing'>Pricing</Link></p>
                    <p><Link to='/contactUs'>Contact us</Link></p>
                </section>
                <section>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} style={{ color: "white" }} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                            <MenuItem style={{ backgroundColor: 'goldenrod', fontWeight: '600' }} onClick={handleClose}>
                                Home
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/ourClasses'>
                            <MenuItem style={{ fontWeight: '600' }} onClick={handleClose}>
                                Our Classes
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/pricing'>
                            <MenuItem style={{ fontWeight: '600' }} onClick={handleClose}>
                                Pricing
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/contactUs'>
                            <MenuItem style={{ fontWeight: '600' }} onClick={handleClose}>
                                Contact us
                            </MenuItem>
                        </Link>
                    </Menu>
                </section>
            </nav>
            {isHomeSection && <section className='headerBody'>
                <section>
                    <h1>THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi ratione harum placeat sint, adipisci eaque tenetur fuga asperiores ea esse dicta, non sed ex quae quisquam laborum voluptatum, veritatis accusamus. Illo omnis harum corrupti?</p>
                    <Link style={{textDecoration: 'none'}} to='/pricing'><Button>JOIN US</Button></Link>
                </section>
                <section >
                    <FontAwesomeIcon icon={faYoutube} style={{opacity:0}}/>
                </section>
            </section>}
            {!isHomeSection && <section>
                <section className='otherSection'>
                    <h1>{sectionText}</h1>
                </section>
            </section>}
        </header >
    );
};

export default Header;