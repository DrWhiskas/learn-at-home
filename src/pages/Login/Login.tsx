import React from "react";
import Logo from '../../media/logo.png'
import User from '../../media/Login/user-light-Red.png'
export default function Login(){
    return (
			<section className="login">
				<img src={Logo} alt="logo" />
				<div className="login__container">
					<img
						className="login__container__user"
						src={User}
						alt="user's icon"
					/>
					<p className="login__container__text">
						Log in to <span>Lear@Home</span>
					</p>
					<form className="login__container__form">
						<label>
							<input className="login__container__form__input" type="text" name="email" placeholder='Email' />
						</label>
					</form>
				</div>
			</section>
		);
}