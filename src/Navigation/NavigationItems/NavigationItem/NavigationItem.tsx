import * as React from 'react';
import {NavLink} from 'react-router-dom'

interface NavigationItemProps {
    to: string;
    label: string;
    end: boolean;
    isExternal: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    return (
        <li className="ml-2 p-3">
            {props.isExternal ? <a href={props.to}>{props.label}</a> : <NavLink to={props.to} end={props.end}
                                                                                className={({isActive}) => isActive ? "bg-gray-600 p-2 rounded" : undefined}>{props.label}</NavLink>}
        </li>
    );
}

export default NavigationItem
