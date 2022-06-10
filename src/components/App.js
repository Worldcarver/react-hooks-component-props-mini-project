import React from "react";
import blogData from "../data/blog";
import ArticleList from "./Article";
import About from "./About";
import Header from "./Header"


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header title = {blogData.name} />
      <About pic = {blogData.image} info = {blogData.about}/>
      <ArticleList />
      
    </div>
  );
}

export default App;
