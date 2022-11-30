// Referencing code from Module 20
import React from "react";

export default function Footer() {
    // Fixed footer code: https://www.w3schools.com/howto/howto_css_fixed_footer.asp
    return (
        <footer
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                width: 100 + "%",
                backgroundColor: "#00B4B4",
                color: "white",
                textAlign: "center"
            }}
            className='container'
        >
            <div className='row mt-3'>
                <p className='col'></p>
                <p className='col'></p>
                <p className='col'><a className='white-link' target='_blank' rel="noreferrer" href="https://github.com/sprantis">GitHub</a></p>
                <p className='col'><a className='white-link' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sarah-prantis/">LinkedIn</a></p>
                <p className='col'><a className='white-link' target='_blank' rel="noreferrer" href="https://twitter.com/bubbleeart">Twitter</a></p>
                <p className='col'></p>
                <p className='col'></p>
            </div>
        </footer>
    )
}