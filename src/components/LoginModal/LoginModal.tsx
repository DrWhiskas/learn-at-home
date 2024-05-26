import React from 'react';
import './loginModal.css';
import Logo from '../../media/logo.png';
import User from '../../media/login/user-light-Red.png';
import { Link } from 'react-router-dom';


interface LoginModalProps {
	title?: string;
	loginIcon?: string;
	emailLabel?: string;

	loginButtonText?: string;
    buttonLink?:string

	passwordLabel?: string;
	forgotPasswordText?: string;
	forgotPasswordLink?: string;

	noAccountText?: string;

	signUpText?: string;
	signUpLink?: string;
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
						<Link to={props.buttonLink || '/login'}>
							<div className="login-modal__container__form__btn btn">
								{props.loginButtonText}
							</div>
						</Link>
					</label>
					<div className="login-modal__container__form__help">
						<Link to={props.forgotPasswordLink || '/forgot'}
							className="login-modal__container__log text-red"
						>
							{props.forgotPasswordText}
						</Link>
						<p className="login-modal__container__log">
							{props.noAccountText}{' '}
							<Link to={props.signUpLink || '/signin'} className="text-red">
								{props.signUpText}
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
}

