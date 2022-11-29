// image, title, link to deployed, gh repo link
import React from "react";

export default function Project(props) {
    return (
        <div>
            <p>
                Title: {props.title}
            </p>
            <img src={props.imgSrc}/>
            <p>
                Deployed Link: {props.deployedLink}
                GitHub Repo Link: {props.ghRepoLink}
            </p>
        </div>
    )
}