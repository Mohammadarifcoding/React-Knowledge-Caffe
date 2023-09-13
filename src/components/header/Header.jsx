import profile from '../../../public/images/profile.png'

const Header = ()=>{
    return (
        <>
            <div className='flex p-4 items-center justify-between my-4'>
            
               <h1 className="lg:text-4xl md:text-3xl  text-2xl font-bold">Knowledge Caffe</h1>
               <img src={profile} alt="" />
            </div>
        </>
    )
}

export default Header