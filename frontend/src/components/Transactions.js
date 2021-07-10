
import React, {Component} from 'react';
import axios from 'axios';
import { getUser } from '../Utils/Common';

class Transaction extends Component {
    state={
          posts:[]
      
    };

    getPost = async () =>{
      const token = sessionStorage.getItem("token") || null;
      const config = {
        headers: { Authorization: `Bearer ${token}` }
        
    };
      const res = await axios.get(`http://localhost:5000/app/transaction-details`,
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

      console.log('lol',this.state.posts);
        return(
            <>
         <table class="table">
  <thead>
    <tr>

      <th scope="col">Account Number</th>
      <th scope="col">Credit</th>
      <th scope="col">Debit</th>
    </tr>
  </thead>
  <tbody>
    {this.state.posts.length === 0 ? <p>loading.......</p> : 
    this.state.posts.map(post => 
      <tr>
        <td>{post.AccountNumber}</td>
        <td>{post.AmountCredit}</td>
        <td>{post.AmountDebit}</td>
      </tr>
      )
    }
  </tbody>
</table>
              
            </>
            );
}
}

export default Transaction