import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css'
// import AGLogo2 from '../NavTabs/AGLogo2.png'
import AGLogo3 from '../NavTabs/AGLogo3.png'

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <div>
            {/* <Link to="/"><img id="logo" alt="AGLogo2" src={AGLogo2} style={{ top: "2px", left: "2px", width: "40px", height: "40px" }} /></Link> */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <span className="tab"><img id="logo" alt="FN logo" src={AGLogo3} style={{ width: "30px", height: "22px" }} /></span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <span className="tab">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/projects"
                        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                    >
                        <span className="tab">Projects</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        <span className="tab">Contact</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
}

export default NavTabs;
