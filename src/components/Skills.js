import js from '../assets/js-logo.png';
import react from '../assets/react-logo.png';
import html from '../assets/html-logo.png';
import css from '../assets/css-logo.png';
import node from '../assets/node-logo.png';
import express from '../assets/express-logo.svg';
import mongo from '../assets/mongo-logo.png'
import git from '../assets/git-logo.png';
import npm from '../assets/npm-logo.png';
import heroku from '../assets/heroku-logo.png';
import github from '../assets/github-logo.png';
import webpack from '../assets/webpack-logo.png';
import jest from '../assets/jest-logo.png';

const Skills = () => {
    return (
        <div className='section' id='skills' href='skills'>
            <h1>Skills</h1>
            <div id='skills-table'>
                <div className='skill-item'>
                    <h2>Front end</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={js} alt='js-logo'/>
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={react} alt='react-logo'/>
                            <p>React</p>
                        </div>
                        <div>
                            <img src={html} alt='html-logo'/>
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={css} alt='css-logo'/>
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src={jest} alt='jest-logo'/>
                            <p>Jest</p>
                        </div>
                    </div>
                    
                </div>
                <div className='skill-item'>
                    <h2>Back end</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={node} alt='node-logo'/>
                            <p>Node</p>
                        </div>
                        <div>
                            <img src={express} alt='express-logo'/>
                            <p>Express</p>
                        </div>
                        <div>
                            <img src={mongo} alt='mongo-logo'/>
                            <p>MongoDB</p>
                        </div>
                    </div>
                    
                </div>
                <div className='skill-item'>
                    <h2>Other tools</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={git} alt='git-logo'/>
                            <p>Git</p>
                        </div>
                        <div>
                            <img src={npm} alt='npm-logo'/>
                            <p>NPM</p>
                        </div>
                        <div>
                            <img src={heroku} alt='heroku-logo'/>
                            <p>Heroku</p>
                        </div>
                        <div>
                            <img src={github} alt='github-logo'/>
                            <p>Github</p>    
                        </div>
                        <div>
                            <img src={webpack} alt='webpack-logo'/>
                            <p>Webpack</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills;