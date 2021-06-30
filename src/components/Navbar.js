import { Link } from 'react-router-dom';
import CV from '../assets/CV.pdf';

const Navbar = () => {
    return (
        <div>
            <Link to ={'/Home'}>
                <p>Home</p>
            </Link>
            <Link to={'/Projects'}>
                <p>Projects</p>
            </Link>
            <Link to ={CV} target="_blank" rel="noopener noreferrer"> 
                <p>Resume</p>
            </Link>
        </div>
    )
}

export default Navbar;