import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList";
import { useEffect } from "react";

const Projects = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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