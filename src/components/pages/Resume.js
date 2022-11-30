// Referencing code from Module 20
import React from 'react';

export default function Resume() {
  return (
    <div className='container'>
        <h1 className='my-4'>Resume</h1>
        <p className='my-5'>
            <a href="https://drive.google.com/file/d/12TBi-HyteHls7hZZa08MLMKVPmFRDwA3/view?usp=sharing" target='_blank' rel="noreferrer" className="teal-text">View and download</a> 
        </p>
        <div className='container'>
            <h5>Front-end Proficiencies</h5>
            <div>
                HTML
            </div>
            <div>
                CSS
            </div>
            <div>
                JavaScript
            </div>
            <div>
                Responsive Design
            </div>
            <div>
                React
            </div>
            <div>
                Bootstrap
            </div>
        </div>
        <div className='container mt-5'>
            <h5>Back-end Proficiencies</h5>
            <div>
                REST APIs
            </div>
            <div>
                Node
            </div>
            <div>
                Express
            </div>
            <div>
                MySQL, Sequelize
            </div>
            <div>
                MongoDB, Mongoose
            </div>
        </div>
    </div>
  );
}
