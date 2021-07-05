const About = () => {
    return (
        <div className='section' id='about' href='about'>
            <div>
            <img src="https://img.icons8.com/android/240/000000/google-code.png"/>
            </div>
            <div id='about__info'>
                <h1>About me</h1>
                <span>
                    Hi, I'm a Full Stack Web Developer. I have been programming since 2017 and I’m willing to keep learning new languages and 
                    tools.
                </span>
                {/* <p>As a goal I want to become a Senior Developer able to guide teams and share ideas with others.
                    Among my strengths are discipline, interest for coding, high self teaching capability, and eagerness to learn from others.
                </p> */}
            </div>
        </div>
    )
}

export default About;