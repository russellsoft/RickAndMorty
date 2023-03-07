import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 400px;
	font-size: 42px;
`

export const Nav = styled.div`
	font-size: 18px;
	display: flex;
	padding: 30px;
	justify-content: space-between;
	align-items: center;
`

export const LinkTo = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	color: black;
`