// Clickable icons for Github, Linkedin, and Twitter
import React from "react";

export default function Footer() {
    // Fixed footer code: https://www.w3schools.com/howto/howto_css_fixed_footer.asp
    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                width: 100 + "%",
                backgroundColor: "#0275d8",
                color: "white",
                textAlign: "center"
            }}
        >
            <div className='row mt-3'>
                <p className='col'></p>
                <p className='col'></p>
                <p className='col'><a className='white-link' href="https://github.com/sprantis">GitHub</a></p>
                <p className='col'><a className='white-link' href="https://www.linkedin.com/in/sarah-prantis/">LinkedIn</a></p>
                <p className='col'><a className='white-link' href="https://twitter.com/bubbleeart">Twitter</a></p>
                <p className='col'></p>
                <p className='col'></p>
            </div>
        </div>
    )
}