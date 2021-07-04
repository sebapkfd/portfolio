const ProjectItem = (props) => { 
    const {project} = props;

    return (
        <div>
            <h1>Project Item</h1>
            <h2>{project.name}</h2>
            <a href={project.link} target='_blank' rel="noopener noreferrer">Live demo</a>
            <a href={project.repo} target='_blank' rel="noopener noreferrer">Repository</a>
        </div>
    )
}

export default ProjectItem;