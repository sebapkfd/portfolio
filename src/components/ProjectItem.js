const ProjectItem = (props) => { 
    const {name} = props;

    return (
        <div>
            <h1>Project Item</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default ProjectItem;