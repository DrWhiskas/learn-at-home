import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
					<CreateLinks link="/home" text="Accueil" />
					<CreateLinks link="" text="Menu" />
					<CreateLinks link="" text="Contact" />
				</ul>
			</header>
		);
}