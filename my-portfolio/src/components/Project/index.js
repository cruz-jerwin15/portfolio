import React from "react";
import "./index.css";
import { Icon } from "@iconify/react";
function Project(props) {
	return (
		<>
			<div className="project col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
				<div class="single">
					<div className="photo">
						<img src={props.project.img} alt="" />
					</div>
					<div className="title">
						<h5>{props.project.title}</h5>
					</div>
					<div className="stack col-12">
						{props.project.stack.map((st) => {
							return <span>{st}</span>;
						})}
					</div>
					<div className="live-link col-12">
						<a href="#">
							<i class="fa-brands fa-github"></i>
						</a>
						<a href="#">
							<Icon
								className="logo"
								icon="ion:logo-vercel"
								color="#FFC93C"
								height="2.2em"
							/>
						</a>
					</div>
					<div className="description col-12">
						<p>{props.project.description}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
