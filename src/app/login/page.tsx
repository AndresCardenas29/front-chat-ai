// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleCredentialsLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		await signIn("credentials", {
			email,
			password,
			callbackUrl: "/",
		});
	};

	const handleGitHubLogin = async () => {
		await signIn("github", { callbackUrl: "/" });
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
			<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm space-y-6">
				<h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>

				<button
					onClick={handleGitHubLogin}
					className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
				>
					Iniciar con GitHub
				</button>

				<div className="text-center text-sm text-gray-500">o usa tu correo</div>

				<form onSubmit={handleCredentialsLogin} className="space-y-4">
					<input
						type="email"
						placeholder="Correo"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full border p-2 rounded"
					/>
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full border p-2 rounded"
					/>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
					>
						Iniciar sesión
					</button>
				</form>
			</div>
		</div>
	);
}
