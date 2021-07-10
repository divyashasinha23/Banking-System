

import React, {Component} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

class AllUser extends Component {
  state={
    posts:[]

};

getPost = async () =>{
const token = sessionStorage.getItem("token") || null;
const config = {
  headers: { Authorization: `Bearer ${token}` }
  
};
const res = await axios.get(`http://localhost:5000/app/All-users`,
config
)

const posts = res.data;
this.setState({ posts:posts})
console.log(posts);
}

componentDidMount() {
  
 this.getPost();



// await axios.get(`http://localhost:5000/app/transaction-details`,
// config
// )
// .then(res => {
//   const posts = res.data;
//   this.setState({ posts });
//   console.log(posts);
// });
}
    
   

    render() {
       
      console.log(this.state.posts)
        return(
            <>
         <table class="table">
  <thead>
    <tr>

      <th scope="col">Full Name</th>
      <th scope="col">Account Number</th>
      <th scope="col">Total balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
              
            </>
            );
}
}

export default AllUser