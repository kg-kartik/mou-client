import Login from './pages/Login';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouForm from './pages/MouForm';
import Mous from './pages/Mous';

const Wrapper = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	form:not(.table-container){
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 40%;
	}
	input{
		padding: 0.2rem 0.5rem;
		border-radius: 0.25rem;
		margin-left: 1rem;
		outline: none;
		border: none;
		width: 16rem;
	}
	input[type=submit]{
		cursor: pointer;
		width: fit-content;
		align-self:center;
		padding: 0.75rem 1.25rem;
		font-weight: 700;
		font-size: 1rem;
		background: var(--accent-secondary);
		color: var(--text);
		margin-top: 1rem;
		border: 0.1rem solid var(--border);
		border-radius: 0.25rem;
	}
	input[type=radio]{
		width: fit-content;
	}
	input:disabled{
		background: var(--background-static);
		color: var(--text);
		border: 0.1rem solid var(--border);
	}
	label{
		display: flex;
		align-items:center;
		justify-content: space-between;
		white-space: nowrap;
	}
	.light-text{
		color: #b5b5b5;
		padding-left: 0.5rem;
		font-weight: 700;
	}
`

const App = () => {
	return (
		<Router>
			<Routes>

				<Route
					path="/mou/form"
					exact
					element={
						<MouForm />
					}
				/>
				

				<Route path="/login" exact element={
				
					<Wrapper>
						<Login />
					</Wrapper>
				} />

				<Route
					path="/mou/mous"
					exact
					element={
						<Mous />
					}
				/>

		</Routes>
	</Router>
  );
}

export default App
