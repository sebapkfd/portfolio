import { useParams } from "react-router-dom";
import projectList from "../assets/projectList";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projectList.filter(pr => pr.id == id)[0];

    return (
        <div>
            <h1>Project Page</h1>
            <h1>{project.name}</h1>
            <a href={project.link} target='_blank' rel="noopener noreferrer">Live demo</a>
        </div>
    )
}

export default ProjectPage;