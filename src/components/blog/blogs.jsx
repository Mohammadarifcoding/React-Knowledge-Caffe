import { useEffect } from "react"
import { useState } from "react"
import PropTypes from 'prop-types'
import Blog from "./blog"

const Blogs = ({handleBookmarks,handleReadingTime})=>{

    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
       fetch('/public/Utility.json') 
       .then(res => res.json())
       .then(data => setBlogs(data))
    },[])
    return(
        
        <>
        <div className="flex flex-col bg-white lg:w-[70%] ">
        {
            blogs.map(blog=> <Blog handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks} blog={blog}></Blog>)
         }
        </div>

        </>
    )
}

export default Blogs