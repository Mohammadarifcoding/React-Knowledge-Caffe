import Bookmark from "./Bookmark"

const Bookmarks = ({bookmarks,Time}) => {
    

   
    return(
        <>
         <div className="flex flex-col lg:w-[30%] my-4 space-y-3 p-4">
            <div className="h-[100px] w-full border-2 font-bold bg-[#6047ec1a] text-[#6047EC] text-xl text-center border-[#6047EC] px-5 py-10 rounded-md">
            Spent time on read : {Time} min
            </div>

            <div className="bg-[#1111110d] rounded-md p-6 space-y-2">
               
               <p className="text-xl font-semibold">Bookmark Blog : {bookmarks.length}</p>
               <div className="flex flex-col space-y-3">
                {
                    bookmarks.map(bookmark => <Bookmark  bookmark={bookmark}></Bookmark>)
                }
               </div>
             

            </div>

         </div>
         {

         }
          
        
        </>
    )
}

export default Bookmarks