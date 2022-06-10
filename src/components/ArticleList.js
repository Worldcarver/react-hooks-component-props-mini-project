import React from "react";
import Article from "./Article"
function ArticleList({blogs}){
    const blogView = blogs.map((blog) =>{
        return <Article key = {blog.id} title = {blog.title} date = {blog.date} preview = {blog.preview}/>
    })


return(
    <div>
        <main>
            {blogView}
        </main>
</div>
)}

export default ArticleList