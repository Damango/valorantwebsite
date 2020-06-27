import React from 'react';
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <div className="links-container">
                <div className="nav-link">Agents</div>
                <div className="nav-link">Arsenal</div>
                <div className="nav-link">Ranking</div>
            </div>

        </div>
    );
}

export default NavBar;