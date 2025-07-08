"use client";
import { LoginButton } from "@/components/atoms";
import { EmailInput, PasswordInput } from "@/components/molecules";
import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login-container">
			<div className="login-container__login-content">
				<div className="logo-container">
					<img className="logo-container__logo" src="images/logo.png" alt="AE-Logo" />
				</div>
				<div className="login-container__title-container">
					<h1 className="login-title">ACADEMIA EUROPEA</h1>
					<p className="login-slogan">#1 EN IDIOMAS</p>
				</div>
				<form action="" className="login-form">
					<EmailInput
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<PasswordInput
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className="login-form__forgot-password-container">
						<span className="forgot-password-text">
							¿Olvidaste tu contraseña?
						</span>
					</div>
					<LoginButton />
				</form>
				<div className="login-container__login-footer">
					<p className="footer-warning">¿Problemas para Acceder? Contacta al administrador del sistema.</p>
				</div>
			</div>
		</div>
	)
}
