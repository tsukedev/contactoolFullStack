import styled from "styled-components";
import img3 from "../../assets/background.jpg"

export const Section = styled.section`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: url(${img3});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

export const Form = styled.form`
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
	width: 72%;
	min-height: 300px;
	max-height: 350px;
	min-width: 230px;
	max-width: 400px;

	h3 {
		padding-top: 20px;
		color: var(----pink-chock);
		margin: 0 auto;
		margin-bottom: 20px;
		font-size: 1.5rem;
	}

	a {
		color: #fff;
		text-decoration: inherit;
	}

	label{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
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

	span{
		cursor: pointer;
	}
`;
