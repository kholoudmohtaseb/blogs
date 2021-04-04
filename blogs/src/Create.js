import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('Kholoud1');
const [pending, setIsPending] = useState(false);
const history = useHistory();


const handleSubmit = (e) => {
e.preventDefault();
const blog = {title, body, author};
console.log(blog);

setIsPending(true);

fetch('http://localhost:8000/blogs', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(blog)
}).then(() => {
    console.log('new blog added');
    setIsPending(false);
    history.go(1); //history.go(-1) forward the blogs
    history.push('/'); //add new blogs to the home page
})
}
    return ( 
        <div className="create">
            <h2>Add new blogs</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type='text'
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                required/>

                <label>Blog body:</label>
                <textarea
                value={body}
                onChange={ (e) => setBody(e.target.value)}
                required/>

                <label>Blog author:</label>
                <select
                value={author}
                onChange={ (e) => setAuthor(e.target.value)}>
                    <option value='Kholoud1'>Kholoud1</option>
                    <option value='Kholoud2'>Kholoud2</option>
                </select>

                {!pending && <button>Add blog</button>}
                {pending && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;