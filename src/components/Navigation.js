// Referencing code from Module 20
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand" href="#">Sarah Prantis</p>

            <div id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li 
                        // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
                        // If it is, we set the current page to 'nav-item-active', otherwise we set it to 'nav-item'
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link' href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link' href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li 
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link' href="#resume">
                            Resume
                        </a>
                    </li>
                    <li
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-item active underline' : 'nav-item'}
                    >
                        <a className='nav-link' href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>        
    </div>
    
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#about-me"
    //       onClick={() => handlePageChange('About Me')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
    //       // If it is, we set the current page to 'nav-item-active', otherwise we set it to 'nav-item'
    //       className={currentPage === 'About Me' ? 'nav-item active' : 'nav-item'}
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#portfolio"
    //       onClick={() => handlePageChange('Portfolio')}
    //       // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-item
    //       className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}
    //     >
    //       Portfolio
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#resume"
    //       onClick={() => handlePageChange('Resume')}
    //       // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-item
    //       className={currentPage === 'Resume' ? 'nav-item active' : 'nav-item'}
    //     >
    //       Resume
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-item
    //       className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}
