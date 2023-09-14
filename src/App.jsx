import { useState } from "react"
import Blogs from "./components/blog/blogs"
import Bookmarks from "./components/bookmarks/Bookmarks"
import Header from "./components/header/header"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [Time,setReadingTime] = useState(0)

  const handleBookmarks = (bookmark) =>{
    const newBookmarks = [...bookmarks,bookmark]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (readingTime,id) =>{
    const newReadingTime = parseFloat(readingTime) + parseFloat(Time)
    setReadingTime(newReadingTime)
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarks)
    
  }



  return (
    <>
    <div className=" mx-auto container">
    <Header></Header>
      <hr className="bg-black h-[1px]" />
      <div className="flex justify-between lg:flex-row flex-col gap-4 my-4">
      <Blogs handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks Time={Time} bookmarks={bookmarks} ></Bookmarks>
      </div>
      
    </div>
     
    </>
  )
}

export default App
