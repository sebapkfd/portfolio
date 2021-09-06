import js from '../assets/logos/js.png';
import react from '../assets/logos/react.png';
import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png';
import node from '../assets/logos/node.png';
import express from '../assets/logos/express.svg';
import mongo from '../assets/logos/mongo.png'
import git from '../assets/logos/git.png';
import npm from '../assets/logos/npm.png';
import heroku from '../assets/logos/heroku.png';
import github from '../assets/logos/github.png';
import webpack from '../assets/logos/webpack.png';
import jest from '../assets/logos/jest.png';

const Skills = () => {
    return (
        <section id='skills' href='skills'>
            <h1>Skills</h1>
            <div id='skills-table'>
                <div className='skill-item'>
                    <h2>Front end</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={js} alt='js'/>
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={react} alt='react'/>
                            <p>React</p>
                        </div>
                        <div>
                            <img src={html} alt='html'/>
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={css} alt='css'/>
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src={jest} alt='jest'/>
                            <p>Jest</p>
                        </div>
                    </div>
                </div>
                <div className='skill-item'>
                    <h2>Back end</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={node} alt='node'/>
                            <p>Node</p>
                        </div>
                        <div>
                            <img src={express} alt='express'/>
                            <p>Express</p>
                        </div>
                        <div>
                            <img src={mongo} alt='mongo'/>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='skill-item'>
                    <h2>Other tools</h2>
                    <div className='skill-item__table'>
                        <div>
                            <img src={git} alt='git'/>
                            <p>Git</p>
                        </div>
                        <div>
                            <img src={npm} alt='npm'/>
                            <p>NPM</p>
                        </div>
                        <div>
                            <img src={heroku} alt='heroku'/>
                            <p>Heroku</p>
                        </div>
                        <div>
                            <img src={github} alt='github'/>
                            <p>Github</p>    
                        </div>
                        <div>
                            <img src={webpack} alt='webpack'/>
                            <p>Webpack</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;