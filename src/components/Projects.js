import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList";

const Projects = () => {

    return (
        <div>
            <h1 id='projects' href='projects'>Projects</h1>
            {projectList.map(pr => {
                return (pr.showOnHome) ? <ProjectItem key={pr.id} project={pr} /> : null;
            })}
            
        </div>
    )
}

export default Projects;