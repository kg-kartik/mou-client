import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing Components
import MouForm from "./pages/MouForm";
import Mous from "./pages/Mous";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/mou/form" exact element={<MouForm />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/mou/mous" exact element={<Mous />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
