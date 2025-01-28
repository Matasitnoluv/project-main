import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Label from '@radix-ui/react-label';

const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			const response = await fetch('http://localhost:8081/v1/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				await response.json();
				// Redirect to /admin on successful login
				navigate('/msproduct');
			} else {
				const errorData = await response.json();
				setError(errorData.message || 'Invalid login credentials');
			}
		} catch {
			setError('An error occurred. Please try again.');
		}
	};
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleLogin}>
				<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

				{error && <p className="text-red-500 text-sm mb-4">{error}</p>}

				<div className="mb-4">
					<Label.Root htmlFor="username" className="block text-sm font-medium text-gray-700">
						Username
					</Label.Root>
					<input
						id="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded-md p-2"
					/>
				</div>

				<div className="mb-4">
					<Label.Root htmlFor="password" className="block text-sm font-medium text-gray-700">
						Password
					</Label.Root>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded-md p-2"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

// return (
// 	<>
// 		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// 			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
// 				<img
// 					alt="Your Company"
// 					src="https://media.discordapp.net/attachments/1274988572679864412/1289996431712845905/Logo.png?ex=6744ae4c&is=67435ccc&hm=3ffde792c371b6988f6b0f7f2dfebbb4da9a785bf5b47629c3787eb349ca9da7&=&format=webp&quality=lossless"
// 					className="mx-auto h-250 w-250"
// 				/>
// 				{/* <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
// 						Sign in to your account
// 					</h2> */}
// 			</div>

// 			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// 				<form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
// 					<div>
// 						<label htmlFor="text" className="block text-sm/6 font-medium text-gray-900">
// 							Username
// 						</label>
// 						<div className="mt-2">
// 							<input
// 								id="username"
// 								type="text"
// 								value={username}
// 								required
// 								onChange={(e) => setUsername(e.target.value)}
// 								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
// 							/>
// 						</div>
// 					</div>

// 					<div>
// 						<div className="flex items-center justify-between">
// 							<label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
// 								Password
// 							</label>
// 						</div>
// 						<div className="mt-2">
// 							<input
// 								id="password"
// 								name="password"
// 								type="password"
// 								required
// 								autoComplete="current-password"
// 								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
// 							/>
// 						</div>
// 					</div>

// 					<div>
// 						<button
// 							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// 						>

// 							Sign in

// 						</button>
// 					</div>
// 				</form>

// 				<p className="mt-10 text-center text-sm/6 text-gray-500">
// 					Couldn't find your Account{' '}
// 					<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
// 						Register
// 					</a>
// 				</p>
// 			</div>
// 		</div>
// 	</>
// )

