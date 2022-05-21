import React from 'react'
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";

const Header: React.FC<any> = (props) => {

    return (
        <header className="bg-charcoal text-white items-center h-screen">
            <div className="m-auto w-fit text-2xl mt-5">
                <NavLink to="/">
                    TheMuler
                </NavLink>
            </div>
            <Navigation/>
        </header>)
}

export default Header
