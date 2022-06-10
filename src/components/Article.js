import React from "react";
function Article({ title, date, preview }){
    const blogInfo = title.map(( title, index) =>{
        return <h3 key={index}>{title}</h3>}
    )




    return(
    <div>
        {blogInfo}
        <small>{date}</small>
        <p>{preview}</p>

    </div>
)
}





export default Article