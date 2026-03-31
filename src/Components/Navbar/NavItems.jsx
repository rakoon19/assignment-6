import React from 'react';

const NavItems = ({ item, id, handleNavClick, mobile }) => {
    return (
        <li 
            className={`list-none cursor-pointer ${mobile ? 'px-6 py-3 hover:bg-gray-50' : 'hover:text-blue-600 transition-colors'}`}
            onClick={() => handleNavClick(id)}
        >
            <span className="text-sm font-medium">{item}</span>
        </li>
    );
};

export default NavItems;