import Tool from "./Tool";

const ProjectItem = ({ project }) => {
    return (
        <div className='project-item'>
            <div>
                <img src={project.img} alt='site-img'/>
            </div>
            <div className='project-item__info'>
                <h2>{project.name}</h2>
                <div className='project-item__stack'>
                    <p>Made with</p>
                    {project.techUsed.map((item, index) => {
                        return <Tool item={item} key={index}/>
                    })}
                    <p>{project.description}</p>
                </div>
                <div className='project-item__links'>
                    <a href={project.link} className='demo-link' target='_blank' rel="noopener noreferrer">Live</a>
                    <a href={project.repo} className='repo-link' target='_blank' rel="noopener noreferrer">Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;