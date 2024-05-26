import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../media/logo.png'
import { LogOut } from "lucide-react";
import './header.css'
interface LinkProps{
    link?: string
    text?: string
}

export default function Header(){
    const [showLinks, setShowLinks] = useState(false);
		function handleShowLinks() {
			setShowLinks(!showLinks);
		}
        function CreateLinks({ link, text }: LinkProps) {
					return (
						<li>
							<Link to={link || ''} className="header__links__link">
								{text}
							</Link>
						</li>
					);
				}
    return (
			<header className={showLinks ? 'header show-header' : 'header'}>
				<ul className="header__links">
					<CreateLinks link="/home" text="Home" />
					<CreateLinks link="" text="Chat" />
					<Link to="/home">
						<img src={Logo} alt="logo" className="header__links__logo" />
					</Link>
					<CreateLinks link="" text="Calendar" />
					<CreateLinks link="" text="Tasks" />
					<div className="logout">
						<LogOut />
					</div>
				</ul>
				<button className="header__burger" onClick={handleShowLinks}>
					<span className="burger-bar"></span>
				</button>
			</header>
		);
}