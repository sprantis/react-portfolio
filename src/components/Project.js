// image, title, link to deployed, gh repo link
import React from "react";

export default function Project(props) {
    return (
        <div className='mt-5'>
            <h5>
                {props.title}
            </h5>
            <img className='pic-dim2' src={props.imgSrc}/>
            <p>
                <a href={props.deployedLink}>Deployed App</a>
            </p>
            <p>
                <a href={props.ghRepoLink}>GitHub Repo</a>
            </p>
        </div>
    )
}