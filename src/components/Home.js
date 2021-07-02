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

            <Skills/>
            <h1>Projects</h1>

            {projectList.map(pr => {
                return (pr.showOnHome) ? <ProjectItem  key={pr.id} project={pr}/> : null ;
            })}

            <Link to={'/portfolio/projects'}>
                <button>See more</button>
            </Link>
        </div>
    )
}

export default Home;