import styled from "styled-components";

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${p => p.theme.space[4]}px;
	margin-bottom: ${p => p.theme.space[3]}px;
	:last-of-type {
		margin-bottom: 0px;
	}
`;

export const Contact = styled.p`
	font-size: ${p => p.theme.fontSizes.m};
`;
export const Title = styled.h2`
	font-size: ${p => p.theme.fontSizes.l};
	margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
	width: 120px;
	height: 40px;
	cursor: pointer;
	display: flex;
	align-items: center;
	border: none;
	border-radius: 5px;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
	background: #e62222;
	position: relative;
	span {
		transition: 200ms;
	}

	:hover .text {
		color: transparent;
	}
	:hover .icon {
		width: 100px;
		border-left: none;
		transform: translateX(0);
	}
	:hover {
		background: #ff3636;
	}
	:focus {
		outline: none;
	}
`;

export const Text = styled.span`
	transform: translateX(10px);
	color: white;
	font-weight: bold;
`;
export const Icon = styled.span`
	position: absolute;
	border-left: 1px solid #c41b1b;
	transform: translateX(70px);
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
