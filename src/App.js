import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing Components
import MouForm from "./pages/MouForm";
import Mous from "./pages/Mous";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { UserProvider } from "./context/user-context";
import UserMous from "./pages/UserMous";

const App = () => {
	return (
		<UserProvider>

		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/mou/form" exact element={<MouForm />} />
				<Route path="/login" exact element={<Login text={"faculty"} />} />
				<Route path="/admin/login/kg20rs19" exact element={<Login text={"Admin"} />} />
				<Route path="/mou/mous" exact element={<Mous />} />
				<Route path="/mou/getUserMous" exact element={<UserMous />} />
			</Routes>
			<Footer />
		</Router>
		</UserProvider>
	);
};

export default App;
