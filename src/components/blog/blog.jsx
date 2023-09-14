import { PropTypes } from "prop-types";
const Blog = ({ blog ,handleBookmarks,handleReadingTime}) => {
  const {
    id,
    cover,
    title,
    author,
    authorImg,
    postedDate,
    readingTime,
    hashtags,
  } = blog;
  return (
    <>
      <div className="p-4 ">
        {/* cover img */}
        <figure className="lg:max-w-[100%]  min-w-[200px]">
          <img src={cover} alt="" className="rounded-md w-full" />
        </figure>
        <div className="flex my-4 justify-between">
          {/* profile pic  */}
          <div className="flex gap-3 items-center">
            <img className="w-[60px] rounded-full" src={authorImg} alt="" />
            <div>
              <h2 className="text-xl font-bold">{author}</h2>
              <p className="text-gray-500 font-medium">{postedDate}</p>
            </div>

           
          </div>
          {/* bookmarks
           */}
          <div>
            <div className="flex text-lg gap-2">
          <p className="">{readingTime} minutes</p>  
          <button onClick={() =>handleBookmarks(blog)}><img className="" src='../../../public/images/frame.svg' alt="" /> </button>
          
            </div>
          
          </div>
        </div>
        <h2 className="my-3 text-4xl font-bold leading-[50px]"> {title}</h2>
      <p className="flex gap-3">
      {
            hashtags.map(hashtag => <p className="text-gray-500 font-medium">{hashtag}</p>)
        }
      </p>

      <button  onClick={()=>handleReadingTime(readingTime,id)} className="text-[#6047EC] cursor-pointer font-semibold my-3 underline">Mark as read</button>
        


      </div>
    </>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
