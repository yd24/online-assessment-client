import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
    <div className="flex justify-between p-5">
        <Link to ='/'>Home</Link>
        <div className="hidden lg:flex gap-10">
            <Link to='/recipes'>Recipes</Link>
            <Link to='/community'>Community</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className="hidden lg:flex gap-10">
            <p>Search</p>
            <p>Login</p>
        </div>
        <div className="lg:hidden w-[24px] h-[24px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </div>
    </div>
    );
}

export default Navbar;