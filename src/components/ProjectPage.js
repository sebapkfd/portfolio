import { useParams } from "react-router-dom";
import projectList from "../assets/projectList";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projectList.filter(pr => pr.id === id)[0];

    return (
        <div>
            <h1>Project Page</h1>
            <h1>{project.name}</h1>
            <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede 
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies 
                nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
            </span>
            <a href={project.repo} target='_blank' rel="noopener noreferrer">Repository</a>
            <a href={project.link} target='_blank' rel="noopener noreferrer">Live demo</a>
        </div>
    )
}

export default ProjectPage;