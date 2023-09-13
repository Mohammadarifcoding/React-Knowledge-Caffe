import { useEffect } from "react"
import { useState } from "react"

const Blogs = ()=>{

    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
       fetch('/public/Utility.json') 
       .then(res => res.json())
       .then(data => setBlogs(data))
    },[])
    return(
        <>
        <h1></h1>
        </>
    )
}

export default Blogs