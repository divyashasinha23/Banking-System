import React from 'react'
import styled from 'styled-components';

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
	width: 400px;
	max-width: 100%;
h2{
	margin: 0;
}
	
`
const Header = styled.div`
border-bottom: 1px solid #f0f0f0;
padding: 10px 30px;
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


	label {
		display: inline-block;
		margin-bottom: 5px;
	}

	input {
		border: 2px solid #f0f0f0;
	border-radius: 4px;
	display: block;
	font-family: inherit;
	font-size: 14px;
	padding: 10px;
	width: 100%;
	}

	input:focus{
		outline: 0;
	border-color: #777;
	}
`

function Transfer() {
    return(
        <>
		<Head_Container>
		<Container>
			<Header>
				<h2>Transfer Amount</h2>
			</Header>
			<Form_Main>
				<Form_Control>
					<label for="acc">Account Number</label> 
					<input name="acc" type="number" id="acc" />
				</Form_Control>
				<Form_Control>
					<label for="amount">Amount</label> 
					<input name="amount" type="amount" id="amount" />
				</Form_Control>
				<button type="submit">Transfer</button>
			</Form_Main>
		</Container>
		</Head_Container>
        </>

    );
}

export default Transfer;