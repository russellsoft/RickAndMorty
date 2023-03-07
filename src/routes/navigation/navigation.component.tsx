import { Outlet } from "react-router-dom"
import { Nav, NavigationContainer, LinkTo } from "./navigation.styles"
import { ReactComponent as Logo } from '../../assets/icons8-rick-sanchez.svg'

const Navigation = () => {
	return (
		<>
			<NavigationContainer>
				<Nav>
					<LinkTo to="/">
						<Logo />
					</LinkTo>
					<LinkTo to="about">
						About me
					</LinkTo>
				</Nav>
				<h1>The Rick And Morty Characters</h1>
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation 