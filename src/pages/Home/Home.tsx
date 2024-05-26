import React from "react";
import Header from "../../components/Header/Header";
import './home.css'
import { Mail } from "lucide-react";
import Info from "../../components/Info/Info";

interface HomeProps{
    mentorImg?: string
    mentorName?: string
    progressChar?: string
    progressText?: string
}

export default function Home({...props}:HomeProps){
    return (
			<section className="home">
				<Header />
				<div className="home__container">
					<h1 className="home__container__title text-red">Dashboard</h1>
					<div className="home__container__info">
						<Info
                        />
					</div>
					<div className="todo">
						<div className="todo__tasks">
							<h2 className="todo__title text-red">Tasks</h2>
						</div>
						<div className="todo__events">
							<h2 className="todo__title text--red">Events</h2>
						</div>
					</div>
				</div>
			</section>
		);
}