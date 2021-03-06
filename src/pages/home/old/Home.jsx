import React, { Component } from 'react';
import './Home.scss';
// import NavigationBar from './../navbar/NavigationBar.jsx';
import websiteData from './../../website-data.json';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <NavigationBar /> */}
				<div id="introduction">
					<div id="info">
						<div className="title">Choose a developer who can tackle your projects</div>
						<div className="subtitle"><span className="bold">Experienced</span> in a variety of full stack technologies</div>
						<div className="subtitle">A proven <span className="bold">Leader</span> who can take your project to success </div>
						<div className="subtitle"><span className="bold">Effective,</span> I have the skills to meet your needs and your deadlines </div>
						<div className="subtitle"><span className="custom-name-color">Austin Joseph </span><span className="custom-title-color">Full-Stack Web Developer</span></div>

						<div id="button-holder">
							<div className="button">
								<a href="#projects">View My Work</a>
							</div>
							<div className="button">
								<a href="#about">See My Credentials</a>
							</div>
							{/* <div className="button">
								<a href="#education">My Credientials</a>
							</div> */}
						</div>
					</div>
				</div>

				<div id="projects">
					<div id="title">What I Have Worked On</div>
					<div className="project-section">
						{
							websiteData.projects.map((project, index) => {
								return (
									// <div className={"element " + (index % 2 === 0 ? "left" : "right")} >
									<div className={"element left"} >
										<div className="title underline">{project.title}</div>
										{
											project.description.map((descLine, index) => {
												return <div className="subtitle">{descLine}</div>
											})
										}
										<div className="body">
											{project.details != null && project.details != "" ? (<a href={project.details}>Details</a>) : (<div/>)}
											<a target="_blank" href={project.github}>Github</a> </div>
										{/* <a href={project.deployment}>Try It Out/a> */}
									</div>
								);
							})
						}
					</div>
				</div>
				<div id="about">
					<div id="title">My Credentials</div>
					<div id="about-body">
						<div id="left-side">
							<div id="profile-image"><img src="profile256.png" alt="profile" /></div>
							<div id="bottom-text">austinobejo@gmail.com</div>
						</div>

						<div id="description">
							I am a tech savvy, hardworking individual focused on creating real life solutions and achieving programming excellence through dedication and teamwork
						</div>
					</div>
					<div className="highlights" id="highlights-1">
						<div>
							{/* <div className={"highlight-img"}>Fast</div> */}
							<div className={"highlight-title"}>Education</div>
							<div className={"highlight-description"}>Bachelor of Science in Computer Science </div>
							<div className={"highlight-description"}>From Stony Brook University</div>
							<div className={"highlight-description"}>Graduated May 2020</div>
							<div className={"highlight-description"}>Machine Learning | Computer Security | Software Development | Computer Networks | Principles of Database Systems | Data Structures | Analysis of Algorithms </div>
						</div>
						<div>
							<div className={"highlight-title"}>Leadership</div>
							<div className={"highlight-description"}>5 years of experience leading 2- 4 person development teams</div>
						</div>
					</div>
					<div className="highlights" id="highlights-2">
						{
							websiteData.highlights.map((highlight, index) => {
								return (
									<div>
										<div className="highlight-title">{highlight.title}</div>
										{
											highlight.description.map((descLine, index) => {
												return <div className="highlight-description">{descLine}</div>
											})
										}
									</div>
								);
							})
						}
					</div>
				</div>
			</React.Fragment >
		);
	}
}
