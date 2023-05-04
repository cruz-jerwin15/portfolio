import React from "react";
import Project from "../Project";
import "./index.css";
function Projects(props) {
	const projects = [
		{
			id: 1,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683180616/ct9bh0sspwl63yenhxqg.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/mcbtuiudaszuqgfai00p.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/pvnid5gtxggaa8n1joqd.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			id: 4,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/kfl0jewyref58wio7zob.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			id: 5,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/qphgcvpnmkiwa6bv4yhg.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/lop6au186qd4qfidh8xc.png",
			title: "City of Sto. Tomas Batangas Scholarship Program",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
			description:
				"Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took  a galley of type and scrambled it to make a type  specimen book.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		},
	];
	return (
		<>
			<section className="project-section container-fluid">
				<div className="row">
					<div className="col-12">
						<h4>Projects</h4>
					</div>
					<div className="col-12 text-center">
						<h5>List of My Personal Projects</h5>
					</div>
					<div className="col-12">
						<div className="row">
							{projects.map((project) => {
								return <Project project={project} />;
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
