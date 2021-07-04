import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList";

const Projects = () => {

    return (
        <div className='section' id='projects' href='projects'>
            <h1 >Projects</h1>
            {projectList.map(pr => {
                return (pr.showOnHome) ? <ProjectItem key={pr.id} project={pr} /> : null;
            })}
            
        </div>
    )
}

export default Projects;