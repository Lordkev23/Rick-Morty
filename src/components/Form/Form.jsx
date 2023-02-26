import React from "react";
import { validation } from "../validation.js";

export default function Form(props) {
	const [userData, setUserData] = React.useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = React.useState({
		username: "",
		password: "",
	});

	function handleInputChange(event) {
		setErrors(
			validation({
				...userData,
				[event.target.name]: event.target.value,
			})
		);

		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.login(userData);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					name="username"
					value={userData.username}
					onChange={handleInputChange}
				/>
				{errors.username && <p>{errors.username}</p>}

				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={userData.password}
					onChange={handleInputChange}
				/>
				<p>{errors.password && errors.password}</p>

				<button type="submit">Ingresar</button>
			</form>
		</div>
	);
}
