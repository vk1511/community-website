import React, { useContext } from "react";
import "./SomeBlogs.css";
import { BlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

const SomeBlogs = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="some-main-container">
      {blogs.slice(0, 6).map((item, index) => {
        return (
          <div className="some-post-container" key={index}>
            <div className="some-post-details">
              <div className="some-article-detail">
                <p className="some-article-catagory">
                   {item.blogCategory}
                </p>
              </div>
              <Link
                to={`/specific-blog/${item._id}`}
                className="pop-specific-link"
              >
                <h4>{item.blogTitle}</h4>
                <p className="some-description">{item.blogContent}</p>
                <p>1 Dec • {item.xMinsRead} min Read</p>
              </Link>
            </div>
            <div className="some-post-img">
              <Link to={`/specific-blog/${item._id}`}>
                <img src={item.thumb} alt="img" className="some-image" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SomeBlogs;
