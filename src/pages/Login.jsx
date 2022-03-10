import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Error = styled.p`
	color: var(--error);
	font-size: 1rem;
	font-weight: 700;
	margin: 0 auto;
`

const ForgotPassword = styled.a`
	width: fit-content;
    margin-left: auto;
	text-align: right;
	text-decoration: underline;
	color: white;
	cursor: pointer;
`

const getErrorMessage = (field, type = "message") => {
	return (
		<Error>
			{(() => {
				switch (type) {
					case "pattern":
						return `Invalid field: ${field.split("_").join(" ").toUpperCase()}`
					case "required":
						return `${field.split("_").join(" ").toUpperCase()} is required`
					case "message":
						return `${field}`
					default:
						return "Something went wrong"
				}
			})()}
		</Error>
	)
}

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

    // const { details, setDetails } = useContext(DetailsContext);
	// const { setComponents } = useContext(PageContext);
	const username = watch("employee_code", "")

	return (
		<form onSubmit={handleSubmit()}>
			{/* Employee Code */}
			<label>
				Username
				<input
					autoComplete="username"
					placeholder="MUJXXXX"
					{
					...register("employee_code", {
						pattern: /(^MUJ(CON)?\d{3,4}$)|(^\d{8}$)/i,
						required: true
					})
					} />
			</label>

			{/* Designation */}
			<label>
				Password
				<input
					type="password"
					placeholder="Password (default: DDMMYY)"
					autoComplete="current-password"
					{...register("password", {
						required: true
					})} />
			</label>

			<ForgotPassword href={`/password_reset/${username}`}>Forgot Password</ForgotPassword>
			{Object.keys(errors).map((error) => {
				return (errors[error]) && getErrorMessage(error, errors[error].type)
			})}

			<input type="submit" value="Login" />
		</form>
	)
}

export default Login
