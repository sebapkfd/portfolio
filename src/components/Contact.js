import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin-logo.png';
import email from '../assets/email-logo.png';

const Contact = () => {
    return (
        <div className='section' id='contact' href='contact'>
            <h1>Contact</h1>
            <div id='contact__links'>
                <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">
                    <img src={github} alt='github-logo'/>
                </a>
                <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin-logo'/>
                </a>
            </div>
            <div>
                <img src={email} alt='email-logo'/>
                <h2>sebastian.pkfd@gmail.com</h2>
            </div>
        </div>
    )
}

export default Contact;