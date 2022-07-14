import blog from '../images/blog.png'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'

function Blogs(){

return(
    <div className="flex-col  w-full h-full  bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Blog Posts</h1>
        <div className="flex flex-row w-full  h-full  grid grid-cols-2 pt-10  ">
            
            
            <div className=" text-2xl font-bold underline italic text-white w-96 h-80 object-center mx-auto ">
                <img src={blog2} alt="how to create a restful json-server"/>
                <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-create-a-restful-json-server-easily-f9023b58859a">How to create a restful json-server easily</a>
                
            </div>
            <div className=" text-2xl font-bold underline italic text-white w-96 h-80 object-center mx-auto">
                <img src={blog3} alt="The main pitfall of learning JavaScript"/>
                <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/the-main-pitfalls-of-learning-javascript-45b2c527ec7a">The main pitfalls of learning JavaScript</a>
                
            </div>
            <div className=" text-2xl font-bold underline italic text-white w-96 h-80 object-center py-16 mx-auto">
                <img src={blog1} alt="how to easily understand the many-to-many"/>
                <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-easily-understand-the-many-to-many-relationships-in-active-record-ca5e37bb1b8">How to easily understand the many-to-many relationships in Active Record</a>
                
            </div>
            <div className=" text-2xl font-bold underline  rounded-lg italic text-white object-center w-96 h-80 py-16 mx-auto ">
                <img className=""src={blog} alt="how to install auth0 in your application"/>
                <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-install-auth0-in-your-application-23072d1a590f">How to install Auth0 in your application</a>
            </div>
        </div>
    </div>
)


}

export default Blogs;