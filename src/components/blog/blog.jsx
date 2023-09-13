import { PropTypes } from 'prop-types';
const Blog = ({blog})=>{

    const {id} = blog
    return (
        <>
         <h1>{id}</h1>
        </>
    )
}
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog