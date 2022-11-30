// Referencing code from Module 20
import React from 'react';
import ProfilePic from "../../assets/images/profile-picture.jpeg"

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img className='img-thumbnail rounded pic-dim' src={ProfilePic} />
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>
                        Hi there!
                    </h5>
                    <p className='card-text'>
                        My name is Sarah. I have many years of strengthening my customer service and team collaboration skills, and I aim to leverage my technical knowledge to further help out those in need. I have chosen to take a shift in my career with my pursuit in Full-Stack Web Development via the University of New Hampshire. I recognize that the Tech field is an ever-changing landscape, but I am confident that my compassion and willingness to help others will shine through in any situation.
                    </p>
                </div>
            </div>

        </div>
    );
}
