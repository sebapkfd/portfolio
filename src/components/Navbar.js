import { useState } from 'react';
import CV from '../assets/CV.pdf';

const Navbar = () => {
    const [screen, setScreen] = useState('navbar');

    const toggleNavbar = () => {
        (screen === 'navbar') ? setScreen('responsive') : setScreen('navbar');
    }

    const hideNavbar = () => {
        if (screen === 'responsive') {
            setScreen('navbar')
        }
    }

    let toggleText = (screen === 'navbar') ? 'More' : 'Hide';

    return (
        <div className={screen}>
            <p id="navbar__control" onClick={() => toggleNavbar()}>{toggleText}</p>
            <a href="#about" onClick={() => hideNavbar()}>About</a>
            <a href='#skills' onClick={() => hideNavbar()}>Skills</a>
            <a href='#projects' onClick={() => hideNavbar()}>Projects</a>
            {/* <a href='#contact' onClick={() => hideNavbar()}>Contact</a> */}
            <a href={CV} target="_blank" rel="noopener noreferrer" onClick={() => hideNavbar()}>Resume</a>
        </div>
    )
}

export default Navbar;