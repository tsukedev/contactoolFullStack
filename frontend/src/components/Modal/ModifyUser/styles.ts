import styled from "styled-components";

const Form = styled.form`
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.37);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 5px;
	padding-bottom: 10px;
	align-items: center;
	height: 55vh;
	width: 100%;
	margin-top: 120px;
	min-height: 320px;
	max-height: 380px;
	min-width: 320px;
	max-width: 420px;

	section	{
		height: 40px;
		width: 100%;
		background-color: transparent;
		display: flex;
		color: var(--pink-chock);
		align-items: center;
		justify-content: space-around;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		color: var(--pink-chock);
	}

	input {
		height: 42px;
		width: 60%;
		padding-left: 20px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 20px;
		border:1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.37);
		margin-top: 5px;
		margin-bottom:4px;
	}

	div	{
		width: 60%;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	span {
		margin-right: 40px;
		font-size: 1.2rem;
	}
	
	h3 {
		padding-top: 20px;
		color: var(----pink-chock);
		margin: 0 auto;
		margin-bottom: 20px;
		font-size: 1.0rem;
	}

	button {
		height: 40px;
		width: 100%;
		margin:2px;
		color: var(--pink-chock);
		background-color: var(--grey);
		cursor: pointer;
		font-size: 1rem;
		border: 2px solid var(--cute-pink);
		margin-top: 10px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 20px;
		border:1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  	}

`;

export default Form;
