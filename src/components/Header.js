// Referencing code from Module 20
import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './Navigation';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About Me');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About Me') {
        return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Resume') {
        return <Resume />;
        }
        if (currentPage === 'Contact') {
        return <Contact />;
        }

    };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <br/>
        <br/>
        <br/>
    </div>
  );
}
