import axios from 'axios';
import React, {useState, useEffect} from 'react';
function Server() {
  const [posts , setPosts] = useState([])
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(resp => {
      data = resp.data;
      data.forEach(e => {
          console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
      });
  })
  .catch(error => {
      console.log(error);
  })
})
  return(
    <div> 
        <ul>
            {
                posts.map(users => <li key = {users.id}>{users.first_name}</li>)
            }
        </ul>
    </div>
)
}
 
  
export default Server





   