import React from "react";
import './login.css'
import Logo from '../../media/logo.png'
import User from '../../media/Login/user-light-Red.png'
import LoginModal from "../../components/LoginModal/LoginModal";

export default function Login(){
    return (
			<section className="login background-red">
				<img src={Logo} alt="logo" />
				<LoginModal
					loginIcon={User}
					title="Log in to"
					loginButtonText="Log in"
					forgotPasswordText="Forgot your password?"
					forgotPasswordLink="/forgot"
					noAccountText="Don't have an account?"
					signUpText="Sign In"
					signUpLink="/signin"
					buttonLink="home"
				/>
			</section>
		);
}