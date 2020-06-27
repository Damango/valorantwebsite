import React from 'react';
import "./MainBody.css"
const MainBody = (props) => {

    return (
        <div className="main-body-container">{props.children}</div>
    );
}

export default MainBody;