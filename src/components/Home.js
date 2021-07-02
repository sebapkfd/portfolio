import Skills from "./Skills";
import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer"> Linkedin</a>
            <p>Email: sebastian.pkfd@gmail.com</p>

            <p>About me</p>

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

            <Skills />
            <h1>Projects</h1>

            {projectList.map(pr => {
                return (pr.showOnHome) ? <ProjectItem key={pr.id} project={pr} /> : null;
            })}

            <Link to={'/portfolio/projects'}>
                <button>See more</button>
            </Link>
        </div>
    )
}

export default Home;