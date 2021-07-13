import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin-logo.png';
import email from '../assets/email-logo.png';

const About = () => {
    return (
        <div className='section' id='about' href='about'>
            <h1>Contact</h1>
            <span>
            I have been coding since 2017 when I started my career. In 2020 I started learning self-taught Web Development by building projects and following The Odin Project curriculum, since then I have learned new tools, languages and frameworks everyday.
            </span>
            <div id='contact-info'>
                <div id='contact__links'>
                    <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">
                        <img src={github} alt='github-logo'/>
                    </a>
                    <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer">
                        <img src={linkedin} alt='linkedin-logo'/>
                    </a>
                </div>
                <div id='contact__email'>
                    <img src={email} alt='email-logo'/>
                    <h2>sebastian.pkfd@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}

export default About;