// Referencing code from Module 20
import React from 'react';
import ProfilePic from "../../assets/images/profile-picture.jpeg"

export default function AboutMe() {
    return (
        <div>
            <h1 className='mt-4'>About Me</h1>
            <img className='img-thumbnail rounded pic-dim my-3' src={ProfilePic} alt='Selfie' />
            <div className='container mt-3 mx-auto'>
                <h5>
                    Hi there!
                </h5>
                <p>
                    My name is Sarah. I have many years of strengthening my customer service and team collaboration skills, and I aim to leverage my technical knowledge to further help out those in need. I have chosen to take a shift in my career with my pursuit in Full-Stack Web Development via the University of New Hampshire. I recognize that the Tech field is an ever-changing landscape, but I am confident that my compassion and willingness to help others will shine through in any situation.
                </p>
            </div>
        </div>
    );
}
