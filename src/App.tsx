import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./global-styles";
import AboutMe from "./routes/about-me/about-component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="about" element={<AboutMe />} />
				</Route>
			</Routes>
			<GlobalStyles />
		</>
	)
}

export default App;
