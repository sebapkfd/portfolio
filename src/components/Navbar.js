import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to ={'/Home'}>
                <p>Home</p>
            </Link>
            <Link to={'/Projects'}>
                <p>Projects</p>
            </Link>
            <Link to ={'../public/assets/Sebastián Soto-CV.pdf'} target="_blank" rel="noopener noreferrer"> 
                <p>Resume</p>
            </Link>
        </div>
    )
}

export default Navbar;