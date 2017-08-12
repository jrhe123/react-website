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