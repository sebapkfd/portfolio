const Skills = () => {
    return (
        <div className='section' id='skills' href='skills'>
            <h1>Skills</h1>
            <div id='skills-table'>
                <div className='skill-item'>
                    <h2>Front end</h2>
                    <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='js-logo'/>
                    <p>Javascript</p>
                    <img src="https://img.icons8.com/nolan/64/react-native.png" alt='react-logo'/>
                    <p>React</p>
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='html-logo'/>
                    <p>HTML</p>
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt='css-logo'/>
                    <p>CSS</p>
                    {/* <p>Jest</p> */}
                </div>
                <div className='skill-item'>
                    <h2>Back end</h2>
                    <img src="https://img.icons8.com/windows/32/26e07f/node-js.png" alt='node-logo'/>
                    <p>Node</p>
                    <img src='https://pedroklepa.com/icons/icon_express.svg' alt='express-logo'/>
                    <p>Express</p>
                    <img src="https://img.icons8.com/color/48/ffffff/mongodb.png" alt='mongo-logo'/>
                    <p>MongoDB</p>
                    {/* <p>Mongoose</p> */}
                </div>
                <div className='skill-item'>
                    <h2>Other tools</h2>
                    <img src="https://img.icons8.com/color/48/ffffff/git.png" alt='git-logo'/>
                    <p>Git</p>
                    <img src="https://img.icons8.com/color/48/ffffff/npm.png" alt='npm-logo'/>
                    <p>NPM</p>
                    <img src="https://img.icons8.com/color/48/ffffff/heroku.png" alt='heroku-logo'/>
                    <p>Heroku</p>
                    <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt='github-logo'/>
                    <p>Github</p>
                    <img src="https://img.icons8.com/dusk/64/ffffff/webpack.png" alt='webpack-logo'/>
                    <p>Webpack</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;