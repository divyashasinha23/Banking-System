import React, {Component} from "react";
import styled from "styled-components";
import axios from 'axios';
import { getUser,getToken } from "../Utils/Common";

const Head_Container = styled.div`
background-color: #ffffff;
font-family: 'Open Sans', sans-serif;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
margin: 0;
`

const Container = styled.div`
    background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	width: 700px;
    height: 400px;
	
	
`
const Header = styled.div`
border-bottom: 1px solid #f0f0f0;
padding: 10px 30px;
text-align: center;
font-size: 20px;
`
const Form_Main = styled.div`
padding: 20px 30px;
  button {
	background-color: #113ed3;
	border: 2px solid #4734f5;
	border-radius: 4px;
	color: #fff;
	display: block;
	font-family: inherit;
	font-size: 16px;
	padding: 10px;
	margin-top: 20px;
	width: 100%;
  }
`

const Form_Control = styled.div`
margin-bottom: 10px;
	padding-bottom: 20px;
	position: relative;
	
`

class Profile extends Component {
 
	state={
		users:[],
		loading: true,
	
  };


	getUserDetails = async () => {
		const token  = getToken();
        const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
 
		 const res =await axios.get('http://localhost:5000/app/User-details',
		 config
		 )

		 const users = res.data.customer;
		 this.setState({ users:users, loading: false});
      console.log(users);

	}

	componentDidMount() {
		this.setState({loading: true});
		this.getUserDetails();
	}
	

render()	 {
	const FullName = this.state.users.FullName;
	const AccountNumber = this.state.users.AccountNumber;
	const TotalBalance = this.state.users.TotalBalance;
  return(
  <>
      	<Head_Container>
		<Container>
			<Header>
				<h2>Welcome User!</h2>
			</Header>
			<Form_Main>
				<Form_Control>
					<h2 className="content">Full Name: {FullName} </h2>
                    <h2 className="content">Account Number:{AccountNumber} </h2>
                    <h2 className="content">Total Balance:{TotalBalance}  </h2>
				</Form_Control>
			</Form_Main>
		</Container>
		</Head_Container>
  </>

  );
}
    
}

export default Profile