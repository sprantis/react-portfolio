// image, title, link to deployed, gh repo link
import React from "react";

export default function Project(props) {
    return (
      <div className='row mt-5'>
        <img className='pic-dim2 col-3' src={props.imgSrc} alt='Project' />
        <div className='col'>
          <h5><strong>{props.title}</strong></h5>
          <p>{props.description}</p>
          <p><em>Technologies: {props.technologies}</em></p>
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <button className='btn btn-primary'>
                <a className='white-link' target='_blank' rel="noreferrer" href={props.deployedLink}>Deployed App</a>
              </button>
            </div>
            <div className='col'>
              <button className='btn btn-primary'>
                <a className='white-link' target='_blank' rel="noreferrer" href={props.ghRepoLink}>GitHub Repo</a>
              </button>
            </div>
            <div className='col'></div>
          </div>
        </div>
        <div className='mt-5 mb-5'>
          <hr/>
        </div>
      </div>
    )
}