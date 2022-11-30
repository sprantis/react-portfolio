// Referencing code from Module 20
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="mx-4">
                <p className="my-2 navbar-brand" href="#">Sarah Prantis</p>
            </div>

            <div id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li 
                        // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
                        // If it is, we set the current page to 'nav-item-active', otherwise we set it to 'nav-item'
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link mx-4' href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link mx-4' href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li 
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link mx-4' href="#resume">
                            Resume
                        </a>
                    </li>
                    <li
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link mx-4' href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>        
  );
}
