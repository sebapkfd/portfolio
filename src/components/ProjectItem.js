const ProjectItem = (props) => { 
    const {project} = props;

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
                        return <img src={item} alt='' key={index}/>
                    })}
                </div>
                <div>
                    <a href={project.link} className='demo-link' target='_blank' rel="noopener noreferrer">Live demo</a>
                    <a href={project.repo} className='repo-link' target='_blank' rel="noopener noreferrer">Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;