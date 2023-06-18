import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Blogimage } from "./Blogimage";
import Blogtext from "./Blogtext";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container container">
      <Header />
      <div className="Blog">
        <Blogtext />
        <Blogimage />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
