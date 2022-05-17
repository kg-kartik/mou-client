import { Fragment, useState } from "react";
import { useUser } from "../context/user-context";
import { useNavigate } from "react-router-dom";

const FormEnter = () => {
	const { user, login, logout } = useUser();
	const isAuth = true;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	// TODO: Make Protected Route
	if (!isAuth) return;

	return (
		<div className="FormEnter">
			<div className="container">
				<div className="heading">{isAuth ? "Profile" : "Login"}</div>
				<div className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus cupiditate inventore corporis? Similique,
					expedita iusto ut vel sunt optio iste.
				</div>
				<div className="form">
					{!isAuth ? (
						<Fragment>
							<div className="form-grp">
								<label htmlFor="email">
									What{`'`}s your email?
								</label>
								<div className="input-container">
									<input
										id="login-input-one"
										type="text"
										name="username"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
										placeholder=""
									/>
								</div>
							</div>
							<div className="form-grp">
								<label htmlFor="password">
									{" "}
									What{`'`}s your password?
								</label>
								<input
									type="password"
									name="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className="helper-line">
								Forgot your password?
							</div>
							<button
								className="btn btn-accent"
								onClick={() => login(username, password)}>
								{/* > */}
								Login
							</button>
						</Fragment>
					) : (
						<Fragment>
							<div className="user">
								<div className="user__info">
									<div className="user__info__name">
										{user?.name}
										{/* Kartik Goel */}
									</div>
									<div className="user__info__email">
										{user?.email}
										{/* goel.kartik@gmail.com */}
									</div>
								</div>
								<button
									className="button btn btn-primary btn-cta"
									onClick={() => navigate("/mou/form")}>
									Go to Form
								</button>
							</div>
							<div className="not-user" onClick={logout}>
								<div className="not-user__text">
									Not
									{user?.name.split(" ")[0]}? Login as other
									user
								</div>
							</div>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
};

export default FormEnter;
