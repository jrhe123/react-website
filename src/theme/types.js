import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from {
		transform: translateY(20px);
		opacity: 0;
	}

	to {
		transform: translateY(0px);
		opacity: 1;
	}
`;

export const FadeInDiv = styled.div`
	animation: ${fade} 0.4s linear;
`;


export const HomeBanner = styled.div`

    height: 400px;
    background: #2980b9;
    background-size: cover;
    margin-bottom: 24px;
    position: relative;

`;
export const HomeContent = styled.div`

    background: #fff;

`;



export const PageHeader = styled.div`

    padding: 85px 0 65px;
    background: #2980b9;
    background-size: cover;
    margin-bottom: 24px;

`;

export const PageTitle = styled.p`

	color: #fff;
	font-size: 36px;
	text-align: center;	

`;

export const PageDesc = styled.p`

	color: #ADADAD;
	font-size: 24px;

`;


export const Card = styled.div`

	position: relative;
    height: 400px;
	width: 300px;
	border: 1px solid #ECECEC;
	border-radius: 6px;
	cursor: pointer;
	text-align: center;
	color: #000;

	&:hover{
    	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

`;

export const CardTitle = styled.p`
	
	margin-top: 18px;
	font-size: 24px;

`;

export const CardCate = styled.span`

	margin-top: 6px;
	border: 1px solid #DDDDDD;
	border-radius: 3px;
	padding: 4px 8px;
	background: #F9F9F9;

`;

export const CardDesc = styled.p`

	margin-top: 18px;
	font-size: 18px;
	padding: 0 12px;
`;

export const CardButton = styled.div`

	position: absolute;
	max-width: 90px;
	left: 50%;
	transform: translateX(-50%);
	bottom: 12px;
	border: 2px solid #444444;
	border-radius: 20px;
	padding: 8px 24px;

	&:hover{
		color: #fff;
		background: #444444;
	}
`;