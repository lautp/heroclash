import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-danger'>
            
            
            
            <a href="#" className='navbar-brand' style={{color:'white', fontSize:'2rem'}}>HeroClash</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16" style={{color:'white'}}>
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
            </svg>
              
            
        </nav>
    )
}

export default Navbar;
