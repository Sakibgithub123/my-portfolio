import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    const navItems =
        <>
            <li className="mr-2 hover:bg-sky-700"><NavLink to={'/'}>Home</NavLink></li>
            <li className="mr-2 hover:bg-sky-700"><NavLink to={'/about'}>About</NavLink></li>
            <li className="mr-2 hover:bg-sky-700"><NavLink to={'/mywork'}>My Work</NavLink></li>
            <li className="mr-2 hover:bg-sky-700"><NavLink to={'/contact'}>Contact</NavLink></li>

            
        </>
    return (
        <div className="navbar bg-[#121217] text-[#8f8f8f] font-semibold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><p className="text-3xl"><span className="text-[#008fff]">Port</span>Folio</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                    navItems
                   }
                </ul>
            </div>
            <div className="navbar-end mr-5">
                {/* <a className="btn">Button</a>
                 */}
                 <button className="mr-4"><Link to={'https://www.facebook.com/profile.php?id=100021557148015'}><FaFacebook></FaFacebook></Link></button>
                 <button className="mr-4"><Link to={'https://www.linkedin.com/in/md-sakibul-hasan-643882227/'}><FaLinkedinIn></FaLinkedinIn></Link></button>
                 <button className="mr-4"><Link to={'https://github.com/Sakibgithub123'}><FaGithub></FaGithub></Link></button>
                 <button className="mr-4"><Link to={'mailto:sakibbangla49@gmail.com'}><MdEmail></MdEmail></Link></button>
            </div>
        </div>
    );
};

export default NavBar;