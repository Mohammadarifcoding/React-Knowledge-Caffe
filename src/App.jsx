import Blogs from "./components/blog/blogs"
import Header from "./components/header/header"

function App() {
  

  return (
    <>
    <div className=" mx-auto container">
    <Header></Header>
      <hr className="bg-black h-[1px]" />
      <Blogs></Blogs>
    </div>
     
    </>
  )
}

export default App
