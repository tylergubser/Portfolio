

function Blogs(){

return(
    <div className="flex-col space-y-10 w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-black text-center italic text-4xl font-bold  bg-gray-100">Blog Posts</h1>
        <div className="text-center text-2xl font-bold underline italic text-white">
            <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-install-auth0-in-your-application-23072d1a590f">How to install Auth0 in your application</a>
        </div>
        <div className="text-center text-2xl font-bold underline italic text-white">
            <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-easily-understand-the-many-to-many-relationships-in-active-record-ca5e37bb1b8">How to easily understand the many-to-many relationships in Active Record</a>
        </div>
        <div className="text-center text-2xl font-bold underline italic text-white">
            <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/how-to-create-a-restful-json-server-easily-f9023b58859a">How to create a restful json-server easily</a>
        </div>
        <div className="text-center text-2xl font-bold underline italic text-white">
            <a className="hover:text-red-400" href="https://medium.com/@tylergubser2200/the-main-pitfalls-of-learning-javascript-45b2c527ec7a">The main pitfalls of learning JavaScript</a>
        </div>
    </div>
)


}

export default Blogs;