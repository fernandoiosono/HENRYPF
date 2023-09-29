import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./nav/Nav";

// import { 
// 	NewGame,
// 	Detail,
// 	Home, 
// 	Landing } from "../views";

const App = () => {

	const { pathname } = useLocation();

	const Home = () => {                //! ESTAS SE BORRAN
		return(
			<>
			</>
		)
	};

	const Landing = () => {              //! ESTAS SE BORRAN
		return(
			<>
			</>
		)
	};

	return (
		<SectionApp>
			<main>
				{pathname !== '/' &&
					<>
						<Nav />
					</>
				}
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Home />} />
				</Routes>
			</main>
		</SectionApp>
	)
};

const SectionApp = styled.section`
	height: calc(100vh - 40px);
	padding:20px;
`;

export default App;