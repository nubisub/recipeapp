import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbarwrapper" id="navbarwrapper">
                <nav id="navbar">
                    <div className="home">
                        <Link to="/">Cook<span
                            className="spanhead">Food</span>
                        </Link>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="dropdown">
                                <Link className="recipes" to="/recipes">Recipes
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" >Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    {/*<Link to="/">Home</Link>*/}
                </nav>
            </div>

            <Outlet />
        </>
    )
};

export default Navbar;