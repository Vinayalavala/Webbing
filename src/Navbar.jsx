import React from 'react';

function Navbar({ onAdminClick, onHomeClick }) {
    return (
        <div className="nav">
            <h2><a href="#" onClick={onHomeClick}>LearnHub</a></h2>
            <h4><a href="#" onClick={onAdminClick}>Admin</a></h4>
        </div>
    );
}

export default Navbar;
