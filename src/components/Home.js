import Skills from "./Skills";
import ProjectItem from "./ProjectItem";

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <a href='https://github.com/sebapkfd' target='_blank' rel="noopener noreferrer">Github</a>
            <a href='https://www.linkedin.com/in/sebasti%C3%A1n-soto-59b493207/' target='_blank' rel="noopener noreferrer"> Linkedin</a>

            <Skills/>
            <h1>Projects</h1>

            <ProjectItem name={'Shopping Cart'}/>
            <ProjectItem name={'Battleship'}/>
            <button>See more</button>
        </div>
    )
}

export default Home;