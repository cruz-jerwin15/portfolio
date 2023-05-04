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
			<article id="#skills" className="skill-section container-fluid">
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
								consequatur rerum temporibus eveniet eaque illo, quod,
								accusamus, eligendi tenetur ducimus incidunt iure quibusdam
								dolor nemo! Ad delectus distinctio iste hic. Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Ad consequatur rerum
								temporibus eveniet eaque illo, quod, accusamus, eligendi tenetur
								ducimus incidunt iure quibusdam dolor nemo! Ad delectus
								distinctio iste hic. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ad consequatur rerum temporibus eveniet eaque
								illo, quod, accusamus, eligendi tenetur ducimus incidunt iure
								quibusdam dolor nemo! Ad delectus distinctio iste hic. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Ad
								consequatur rerum temporibus eveniet eaque illo, quod,
								accusamus, eligendi tenetur ducimus incidunt iure quibusdam
								dolor nemo! Ad delectus distinctio iste hic.
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}

export default Skills;
