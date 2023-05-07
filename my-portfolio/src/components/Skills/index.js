import React from "react";
import "./index.css";
function Skills(props) {
	const skills = [
		"Javascript",
		"HTML",
		"CSS",
		"NodeJs",
		"MongoDB",
		"MySQL",
		"PHP",
		"Laravel",
		"Java",
		"Android",
		"ReactJS",
	];
	return (
		<>
			<article id="skills" className="skill-section container-fluid">
				<div className="row">
					<div className="col-12">
						<h4>Tech Stack</h4>
					</div>
					<div className="profile col-xxl-4 col-xl-4 col-lg-4 col-md-12">
						<img
							src="https://res.cloudinary.com/codestudio28/image/upload/v1683176384/zaacjcephbue34nma3cr.png"
							alt=""
						/>
					</div>
					<div className="skill-info col-xxl-8 col-xl-8 col-lg-8 col-md-12">
						<div className="skills">
							{skills.map((skill) => {
								return <span className="skill"> {skill}</span>;
							})}
						</div>
						<div className="skill-describe">
							<h5>Teach and Code</h5>
							<p>
								Professor Jerwin Cruz is a highly accomplished professor and
								full-stack developer with a passion for technology and
								education. He holds a Master in Information Technology from
								Technological Institute - Manila and has over 11 years of
								experience teaching a variety of computer science courses and
								information technology at both the undergraduate and graduate
								levels. In addition to his academic work, Prof. Cruz is also a
								skilled full-stack developer with expertise in a range of
								programming languages, including C/C++, Javascript,Java,C# and
								many more. He has worked on a variety of projects, from web and
								mobile applications to mobile game and machine learning
								algorithms. Prof. Cruz is known for his ability to bridge the
								gap between academia and industry, bringing real-world examples
								and practical applications into the classroom. His students
								consistently praise him engaging teaching style and his ability
								to make complex concepts easy to understand. Outside of work,
								Prof. Cruz enjoys singing and spending time with his family. He
								is also an active member of the local tech community, frequently
								participating in hackathons and other programming events.
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}

export default Skills;
