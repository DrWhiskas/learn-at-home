import React from "react";
import './info.css'
import { Mail } from 'lucide-react';

interface InfoProps {
	mentorImg?: string;
	mentorName?: string;
	progressChar?: string;
	progressText?: string;
    unreadMessages?:string;
}

export default function Info({...props}:InfoProps){

    return (
			<div className="info">
				<div className="info__content">
					<h4 className="info__content__title">Messages</h4>
					<Mail />
					<p className="info__content__messages">
						You have <span>{props.unreadMessages || 0} unread messages</span>
					</p>
				</div>
				<div className="info__content">
					<h4 className="info__content__title">Progress</h4>
					<div className="info__content__progress"></div>
				</div>
				<div className="info__content">
					<h4 className="info__content__title">Mentor</h4>
					<div className="info__content__mentor">
						<p>{props.mentorName || 'No mentor'}</p>
					</div>
				</div>
			</div>
		);
}
