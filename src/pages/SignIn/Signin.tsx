import React from "react";
import './signin.css'
import Logo from '../../media/logo.png'
import User from '../../media/Login/user-light-Red.png'
import LoginModal from "../../components/LoginModal/LoginModal";

export default function Signin(){
    return (
			<section className="signin">
				<img src={Logo} alt="logo" />
				<LoginModal
					loginIcon={User}
					title="Sign in to"
					loginButtonText="Sign in"
					noAccountText="Already have an account?"
					signUpText="Log In"
					signUpLink="/login"
					buttonLink="home"
				/>
			</section>
		);
}