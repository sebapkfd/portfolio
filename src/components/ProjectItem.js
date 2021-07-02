import { Link } from "react-router-dom";

const ProjectItem = (props) => { 
    const {project} = props;

    return (
        <div>
            <h1>Project Item</h1>
            <h2>{project.name}</h2>
            <Link to={`/portfolio/projects/${project.id}`}>
                <p>See more</p>
            </Link>
        </div>
    )
}

export default ProjectItem;