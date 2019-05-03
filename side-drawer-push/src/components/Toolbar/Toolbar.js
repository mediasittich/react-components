import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const toolbar = props => {
    let drawerClasses = ['toolbar'];

    if (props.show) {
        drawerClasses = ['toolbar', 'open'];
    }
    return (
        <header  className={drawerClasses.join(' ')}>
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo"><a href="/">LOGO</a></div>
                <div className="spacer"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default toolbar;