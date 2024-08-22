import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [open, setOpen] = useState(false);

    const toggleMobileNav = (e) => {
        setOpen(!open);
    };

    return (
        <div id="navigation-menu" className="w-full bg-white flex flex-col px-5 lg:px-10 items-between sticky top-0">
            <div id="lg-nav" className="flex justify-between p-5">
                <Link to ='/'>Home</Link>
                <div className="hidden lg:flex gap-10">
                    <Link className="hover:text-orange-400" to='/recipes'>Recipes</Link>
                    <Link className="hover:text-orange-400" to='/community'>Community</Link>
                    <Link className="hover:text-orange-400" to='/about'>About</Link>
                </div>
                <div className="hidden lg:flex gap-10">
                    <p>Search</p>
                    <div className="w-[24px] h-[24px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    </div>
                </div>
                <div id="mobile-nav-icon" className="lg:hidden w-[24px] h-[24px]" onClick={toggleMobileNav}>
                    {!open 
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                    }
                </div>
            </div>
            {open &&
                <div id="mobile-nav" className="lg:hidden flex flex-col items-center text-center w-full bg-white pb-10 fixed top-10 left-0">
                    <p className="p-8">Search</p>
                    <ul className="flex flex-col gap-8">
                        <li><Link to='/recipes'>Recipes</Link></li>
                        <li><Link to='/community'>Community</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li>Login / Sign-up</li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default Navbar;