import React, {useState, useEffect} from 'react';
import axios from 'axios';


function GetData() {
    const [posts , setPosts] = useState([])
   
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return(
        <div> data
            <ul>
                {
                    posts.map(post => <li key = {post.id}>{post.titile}</li>)
                }
            </ul>
        </div>
    )
}
export default GetData