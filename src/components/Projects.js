import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            {projectList.map(pr => {
                return <ProjectItem key={pr.id} project={pr}/>
            })}
            
        </div>
    )
}

export default Projects;