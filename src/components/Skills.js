import { frontEnd, backEnd, others } from '../assets/toolsList';
import ItemSkill from './ItemSkill';

const Skills = () => {
    return (
        <section id='skills' href='skills'>
            <h1>Skills</h1>
            <div id='skills-table'>
                <div className='skill-card'>
                    <h2>Front end</h2>
                    <div className='skill-item__table'>
                        {frontEnd.map(skill => {
                            return <ItemSkill skill={skill} key={skill.name} />
                        })}
                    </div>
                </div>
                <div className='skill-card'>
                    <h2>Back end</h2>
                    <div className='skill-item__table'>
                        {backEnd.map(skill => {
                            return <ItemSkill skill={skill} key={skill.name} />
                        })}
                    </div>
                </div>
                <div className='skill-card'>
                    <h2>Others</h2>
                    <div className='skill-item__table'>
                        {others.map(skill => {
                            return <ItemSkill skill={skill} key={skill.name} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;