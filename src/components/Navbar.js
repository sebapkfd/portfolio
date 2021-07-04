import CV from '../assets/CV.pdf';

const Navbar = () => {
    return (
        <div id={'navbar'}>
            <a href="#about">About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a href={CV} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    )
}

export default Navbar;