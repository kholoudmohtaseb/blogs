// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, pending, error} = useFetch('http://localhost:8000/blogs')



    return (
        <div className="home">
            {error && <div>Error</div> }
            {pending && <div>is Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title = "All Blogs" //handleDelete={handleDelete}
            />}
        </div>
);
}

export default Home
