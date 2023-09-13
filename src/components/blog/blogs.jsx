import { useEffect } from "react"
import { useState } from "react"
import PropTypes from 'prop-types'
import Blog from "./blog"

const Blogs = ()=>{

    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
       fetch('/public/Utility.json') 
       .then(res => res.json())
       .then(data => setBlogs(data))
    },[])
    return(
        <>
         {
            blogs.map(blog=> <Blog blog={blog}></Blog>)
         }
        </>
    )
}

export default Blogs