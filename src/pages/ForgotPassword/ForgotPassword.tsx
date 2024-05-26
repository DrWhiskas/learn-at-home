import React from "react";
import './forgotPassword.css';
import Logo from '../../media/logo.png'
import User from '../../media/Login/user-light-Red.png'
import LoginModal from "../../components/LoginModal/LoginModal";

export default function ForgotPassword() {
	return (
		<section className="forgotPassword">
			<img src={Logo} alt="logo" />
			<LoginModal
				loginIcon={User}
				title="Forgot your password"
				loginButtonText="Sign in"
				noAccountText="Already have an account?"
				signUpText="Log In"
				signUpLink="/login"
				buttonLink="home"
			/>
		</section>
	);
}