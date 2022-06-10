import React from "react";

function About({pic, info}){
    return(
    <aside>
        <img src = {pic} alt = 'blog logo'/>
        <p>{info}</p>
    </aside>
)}



export default About