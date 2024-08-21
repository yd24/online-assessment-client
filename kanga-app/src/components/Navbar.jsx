import { Link } from 'react-router-dom';

function Navbar(props) {
    return <>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/community'>Community</Link>
            <Link to='/about'>About</Link>
        </div>
    </>;
}

export default Navbar;