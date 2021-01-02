import React, { createContext, useEffect, useState } from "react";
//import { Blog } from "../constants/BlogData";
import axios from 'axios'

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  
  const [Blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://communitywebsite.herokuapp.com/blogs')
        .then(res => {
            console.log(res)
            setBlog(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  
  return (
    <BlogContext.Provider value={{ blogs: Blog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
