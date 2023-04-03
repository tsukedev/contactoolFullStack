import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 68px;
	border-bottom: 1px solid var(--grey);
	width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.37);

  	div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		margin-right: 30px;
  	}

    button {
		cursor: pointer;
		border: 1px solid var(--pink-chock);
		font-size: 20px;
		padding: 8px;
		border-radius: 20px;
    	border:1px solid rgba(255, 255, 255, 0.18);
		color: var(--pink-chock);
		background-color: transparent;
		:hover {
			box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.37);
		}
    }

  	h1 {
		margin-left: 30px;
		font-size: 1.5rem;
		color: var(--pink-chock);
  	}
`;
