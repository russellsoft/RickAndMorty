import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	padding: 20px;

	img { 
		width: 300px;
		border: 2px solid black;
		margin-right: 50px;
	}
`

export const PersonalInfo = styled.div`
	display: grid;
	width: 800px;
	font-size: 20px;
	height: 200px;

	.name {
		font-size: 32px;
	}
`

export const Linking = styled(Link)`
`