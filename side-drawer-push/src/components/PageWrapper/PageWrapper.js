import React from 'react';

import './PageWrapper.css';

const pageWrapper = props => {
    
    return <div className="wrapper">{props.children}</div>
}

export default pageWrapper;