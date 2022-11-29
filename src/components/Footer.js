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
            <a href="https://github.com/sprantis">GitHub <i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sarah-prantis/">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/bubbleeart">Twitter <i class="fa-brands fa-square-twitter"></i></a>
        </div>
    )
}