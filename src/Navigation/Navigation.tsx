import * as React from 'react';
import NavigationItems from "./NavigationItems/NavigationItems";

function Navigation(props: any) {
    return (
        <nav className="w-auto m-auto">
            <NavigationItems />
        </nav>
    );
}

export default Navigation
