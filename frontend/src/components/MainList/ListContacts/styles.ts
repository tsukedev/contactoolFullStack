import styled from "styled-components";

const Section = styled.section`
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.37);
	display: flex;
	flex-direction: column;
	padding-top: 5px;
	padding-bottom: 10px;
	align-items: center;
	height: 55vh;
	min-height: 320px;
	max-height: 380px;
	min-width: 320px;
	max-width: 420px;

	h3 {
		padding-top: 20px;
		color: var(--pink-chock);
		margin: 0 auto;
		margin-bottom: 20px;
		font-size: 1.0rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 230px;
		overflow: auto;
	}

	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 42px;
		width: 90%;
		padding-left: 12px;
		margin-top: 5px;
		margin-bottom:4px;
	}

	p {
		color: var(--pink-chock);
		height: 22px;
		width: 30%;
	}
	
	button {
		height: 22px;
		width: 25%;
		color: var(--pink-chock);
		cursor: pointer;
		font-size: 0.9rem;
		border: 2px solid var(--cute-pink);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 20px;
		margin-right: 7px;
		border:1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  	}

`;

export default Section;
