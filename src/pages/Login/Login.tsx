import React from "react";
import './login.css'
import Logo from '../../media/logo.png'
import User from '../../media/Login/user-light-Red.png'
import LoginModal from "../../components/LoginModal/LoginModal";

export default function Login(){
    return (
			<section className="login">
				<img src={Logo} alt="logo" />
				<LoginModal
					loginIcon={User}
					title="Log in to"
					loginButtonText="Log in"
					forgotPasswordText="Forgot your password?"
					noAccountText="Don't have an account?"
                    signUpText="Sign In"
				/>
			</section>
		);
}