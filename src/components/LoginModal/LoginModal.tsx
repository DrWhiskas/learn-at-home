import React from 'react';
import './loginModal.css';
import Logo from '../../media/logo.png';
import User from '../../media/login/user-light-Red.png';

interface LoginModalProps {
	title?: string;
    loginIcon?: string
	emailLabel?: string;
	passwordLabel?: string;
	loginButtonText?: string;
	forgotPasswordText?: string;
    noAccountText?: string
	signUpText?: string;
}

export default function LoginModal({...props}:LoginModalProps) {
	return (
		<section className="login-modal">
			<div className="login-modal__container">
				<img
					className="login-modal__container__user"
					src={props.loginIcon}
					alt="user's icon"
				/>
				<p className="login-modal__container__text">
					{props.title} <span className="text-red">Learn@Home</span>
				</p>
				<form className="login-modal__container__form">
					<label>
						<input
							className="login-modal__container__form__input"
							type="text"
							name="email"
							placeholder="Email"
						/>
					</label>
					<label>
						<input
							className="login-modal__container__form__input"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</label>
					<label>
						<button className="login-modal__container__form__btn btn">
							{props.loginButtonText}
						</button>
					</label>
					<div className="login-modal__container__form__help">
						<a href="#" className="login-modal__container__log text-red">
							{props.forgotPasswordText}
						</a>
						<p className="login-modal__container__log">
							{props.noAccountText}{' '}
							<a href="#" className="text-red">
								{props.signUpText}
							</a>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
}

