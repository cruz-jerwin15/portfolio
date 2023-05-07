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
			github: "https://github.com/cruz-jerwin15/scholarship",
			vercel: "http://ydocityofstotomas-scholarship.org.ph:8001/",
			description:
				"A scholarship management website for City of Sto. Tomas, Batangas that allows students to browse through available scholarship options, including their requirements and eligibility criteria. The website also offer resources to help students with their application process, such as online application forms, receiving SMS notification, and submission of requirements",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/mcbtuiudaszuqgfai00p.png",
			title: "FrontendMentor Interactive Card Challenge",
			stack: ["HTML", "CSS"],
			github: "https://github.com/cruz-jerwin15/interactivecarddetails",
			vercel: "https://interactivecarddetails-omega.vercel.app/",
			description:
				"Designed and built an interactive card component for frontendmentor.io challenge and get it look as close to the design as possible and view optimal layout depending on their device's screen size.",
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/pvnid5gtxggaa8n1joqd.png",
			title: "FrontendMentor Calculator App Challenge",
			stack: ["HTML", "CSS", "Javascript"],
			github: "https://github.com/cruz-jerwin15/calculatorapp",
			vercel: "https://calculatorapp-one.vercel.app/",
			description:
				"Designed and built a calculator application for frontendmentor.io challenge and get it look as close to the design as possible. The calculator perform mathematical operations like addition, subtraction, multiplication and division and adjust the color theme based on their preference.",
		},
		{
			id: 4,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/kfl0jewyref58wio7zob.png",
			title: "FrontendMentor NFT Card Challenge",
			stack: ["HTML", "CSS"],
			github: "https://github.com/cruz-jerwin15/nftcardpreview",
			vercel: "https://nftcardpreview.vercel.app/",
			description:
				"Designed and built a NFT card preview component for frontendmentor.io challenge and get it look as close to the design as possible and view optimal layout depending on their device's screen size.",
		},
		{
			id: 5,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/qphgcvpnmkiwa6bv4yhg.png",
			title: "FrontendMentor Order Summary Challenge",
			stack: ["HTML", "CSS"],
			github: "https://github.com/cruz-jerwin15/productsummarycomponent",
			vercel: "https://productsummarycomponent.vercel.app/",
			description:
				"Designed and built an ordered summary component for frontendmentor.io challenge and get it look as close to the design as possible and view optimal layout depending on their device's screen size.",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683184078/lop6au186qd4qfidh8xc.png",
			title: "FrontendMentor Preview Card Challenge",
			stack: ["HTML", "CSS"],
			github: "https://github.com/cruz-jerwin15/productpreviewcardcomponent",
			vercel: "https://productpreviewcardcomponent-gamma.vercel.app/",
			description:
				"Designed and built a product preview card component for frontendmentor.io challenge and get it look as close to the design as possible and view optimal layout depending on their device's screen size.",
		},
		{
			id: 7,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683190024/k30mnlgbsuwlnc0xxxsv.png",
			title: "Internship Finder Application",
			stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Laravel"],
			github: "https://github.com/Kodego-WD40P/cp_g01",
			vercel: "https://carreerin.com/",
			description:
				"Lead a team to developed an internship website that provide information about available internship opportunities for college and senior high students seeking work experience in their field of study. The website serves as a hub for employers seeking to hire interns and students seeking internship positions.",
		},
		{
			id: 8,
			img: "https://res.cloudinary.com/codestudio28/image/upload/v1683424040/hgkpzarlemmrdddjtcyv.png",
			title: "Aling Nena's E-commerce",
			stack: [
				"HTML",
				"CSS",
				"Javascript",
				"ReactJS",
				"PHP",
				"MySQL",
				"Laravel",
				"Paypal Plugins",
			],
			github: "https://github.com/Kodego-WD40P/mp02-grp02",
			vercel: "https://alingnena.vercel.app/",
			description:
				"Lead a team to developed an e-commerce website as a requirements for mini-project 2 of Kodego Bootcamp. Aling Nena is an online platform where customers can browse and purchase clothing. This website featured a wide range of clothing options for men, women, and kids, including shirts, pants, and dresses. We also added paypaljs for payment integration.",
		},
	];
	return (
		<>
			<section
				id="section_projects"
				className="project-section container-fluid"
			>
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
