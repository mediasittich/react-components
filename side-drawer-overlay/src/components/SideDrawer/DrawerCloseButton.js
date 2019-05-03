import React from 'react';

import './DrawerCloseButton.css';

const drawerCloseButton = props => (
    <button className="close-button" onClick={props.close}>
        <div className="close-button__icon">X</div>
    </button>
);

export default drawerCloseButton;