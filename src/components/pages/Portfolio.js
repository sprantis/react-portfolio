// Referencing code from Module 20
import React, {useState} from 'react';
import devProjects from "../../devProjects.json"
import Project from "../Project"

export default function Portfolio() {
    const [siteProjects, setSiteProjects] = useState({devProjects})

  return (
    <div>
      <h1 className='mt-4'>Portfolio</h1>
      <div className='container mx-auto'>
        <div className='col'>
            {siteProjects.devProjects.map(devProject => (
                <div key={devProject.id + ' div'} className='col'>
                    <Project 
                        id={devProject.id}
                        key={devProject.id}
                        title={devProject.title}
                        imgSrc={devProject.imgSrc}
                        description={devProject.description}
                        technologies={devProject.technologies}
                        deployedLink={devProject.deployedLink}
                        ghRepoLink={devProject.ghRepoLink}
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
