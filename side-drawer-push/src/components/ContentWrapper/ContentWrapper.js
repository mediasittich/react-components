import React from 'react';

import './ContentWrapper.css';

const contentWrapper = props => {
    let wrapperClasses = ['wrapper'];

    if (props.show) {
        wrapperClasses = ['wrapper', 'open'];
    }
    
    return <div className={wrapperClasses.join(' ')}>{props.children}</div>
}

export default contentWrapper;