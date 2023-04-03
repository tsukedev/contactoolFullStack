import styled from "styled-components";
import img3 from "../../assets/background.jpg"

export const Main = styled.main`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
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
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	justify-content: space-between;
	gap: 200px;
	margin-top: 85px;
`;