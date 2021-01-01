import React, { useContext } from "react";
import "./PopularPost.css";
import { BlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

const PopularPost = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="popular-main-container">
      {blogs.slice(0, 4).map((item, index) => {
        return (
          <div className="popular-post-container" key={index}>
            <div className="popular-post-img">
              <Link to={`/specific-blog/${item._id}`}>
                <img src="https://images.unsplash.com/photo-1609507719752-c5ee71ef1705?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img" className="popular-image" />
              </Link>
            </div>
            <div className="popular-post-details">
              <div className="popular-article-detail">
                <p className="popular-article-catagory">
                  {item.blogCategory}
                </p>
              </div>
              <Link
                to={`/specific-blog/${item._id}`}
                className="pop-specific-link"
              >
                <h4>{item.blogTitle}</h4>
              </Link>
              <p className="popular-description">{item.content}</p>
              <p>1 Dec • {item.xMinsRead} min Read</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularPost;
