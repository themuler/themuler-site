import React from 'react'
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";

const Header: React.FC<any> = (props) => {

    return (<header className="w-screen bg-charcoal text-white grid grid-cols-nav items-center md:">
        <div className="m-auto w-fit text-2xl">
            <NavLink to="/">
                TheMuler
            </NavLink>
        </div>
        <Navigation/>
    </header>)
}

export default Header
