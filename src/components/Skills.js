const Skills = () => {
    return (
        <div className='section' id='skills' href='skills'>
            <h1>Skills</h1>
            <div id='skills-table'>
                <div className='skill-item'>
                    <h2>Front end</h2>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Jest</p>
                </div>
                <div className='skill-item'>
                    <h2>Back end</h2>
                    <p>Node</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                    <p>Mongoose</p>
                </div>
                <div className='skill-item'>
                    <h2>Other tools</h2>
                    <p>Git</p>
                    <p>NPM</p>
                    <p>Heroku</p>
                    <p>Github</p>
                    <p>Webpack</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;