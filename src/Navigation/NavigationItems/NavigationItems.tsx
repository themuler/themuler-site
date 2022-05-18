import * as React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

export function NavigationItems(props: any) {
    return (
        <ul className="flex flex-row justify-center items-center">
            <NavigationItem to="/projects" label="Projects" end={false} isExternal={false}/>
            <NavigationItem to="https://bhavanichandra.com" label="Profile" end={false} isExternal={true}/>
            <NavigationItem to="https://blog.themuler.com" label="Blogs" end={false} isExternal={true}/>
        </ul>
    );
}

export default NavigationItems
