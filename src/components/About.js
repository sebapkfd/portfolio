import githubDark from '../assets/github-dark-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';

const About = () => {

    const copyMail = () => {
        navigator.clipboard.writeText('sebastian.pkfd@gmail.com');
    }

    return (
        <section id='about' href='about'>
            <h1>About me</h1>
            <p className='about-info'>
                I have been coding since 2017 when I started my career. In 2020 I started learning self-taught Web Development by building projects and following The Odin Project curriculum, since then I have been learning new tools, languages and frameworks everyday.
            </p>
            <p className='about-info'>Let's get in contact, email me at</p>

            <div className='mail-wrapper'>
                <span className='tooltip'>Click to copy email addres</span>
                <p onClick={() => copyMail()} className='mail-link'> sebastian.pkfd@gmail.com</p>
            </div>
            <p>You can also find me in:</p>
            <div id='contact__links'>
                <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">
                    <img src={githubDark} alt='github-logo'/>
                </a>
                <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt='linkedin-logo'/>
                </a>
            </div>
        </section>
    )
}

export default About;