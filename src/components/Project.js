// image, title, link to deployed, gh repo link
import React from "react";

export default function Project(props) {
    return (
        <div className='mt-5'>
            <h5>
                {props.title}
            </h5>
            <img className='pic-dim2' src={props.imgSrc} alt='Project' />
            <div className='mt-3'>
                <a className='teal-text' target='_blank' rel="noreferrer" href={props.deployedLink}>Deployed App</a>
                <p></p>
                <a className='teal-text' target='_blank' rel="noreferrer" href={props.ghRepoLink}>GitHub Repo</a>
            </div>
        </div>
    )
}