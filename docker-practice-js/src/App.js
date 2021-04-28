import { React, useState, useEffect } from 'react';
import './App.css';
import { API_BASE_URL } from './constants';

function App() {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(true);

	const getData = () => {
		fetch(API_BASE_URL + '/users')
			.then((response) => response.json())
			.then((data) => setUsers(data));

		setLoading(false);
	};

	console.log(users);
	console.log(loading);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Users: </h1>

				{loading === false && users != null ? (
					<div>
						{users.map((user) => (
							<div>
								<h3>{user.name}</h3>
								<h3>{user.email}</h3>
							</div>
						))}
					</div>
				) : null}

				<button
					style={{
						height: '3rem',
						width: '8rem',
						cursor: 'pointer',
					}}
					onClick={getData}
				>
					Get Data
				</button>
			</header>
		</div>
	);
}

export default App;
