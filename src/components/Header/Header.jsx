import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/countries">Countries</NavLink>
            </nav>
        </div>
    );
};

export default Header;