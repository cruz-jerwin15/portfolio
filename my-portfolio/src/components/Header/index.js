import React, { useState } from "react";
import "./index.css";
import { Icon } from "@iconify/react";
function Header(props) {
	const [link, setLink] = useState(1);
	const changeNavState = (linkState) => {
		setLink(linkState);
	};
	return (
		<>
			<header className="col-12">
				<nav className="navbar navbar-expand-md">
					<div className="container-fluid">
						<a className="navbar-brand fw-bolder" href="#home">
							JERZCRUZ
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="fa-solid fa-bars"></i>
						</button>
						<div
							className="collapse navbar-collapse "
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto">
								<li className="nav-item">
									<a
										className="nav-link active mt-2"
										aria-current="page"
										href="#home"
										onClick={() => changeNavState(1)}
									>
										Home
									</a>
									{link === 1 ? (
										<div className="line-under mb-2 ms-auto w-100 d-md-block d-sm-none d-none"></div>
									) : (
										<div className="line-under-remove mb-2  d-sm-none d-none"></div>
									)}
								</li>
								<li className="nav-item">
									<a
										className="nav-link mt-2"
										href="#skills"
										onClick={() => changeNavState(2)}
									>
										Tech Stack
									</a>
									{link === 2 ? (
										<div className="line-under mb-2 ms-auto w-100 d-md-block d-sm-none d-none"></div>
									) : (
										<div className="line-under-remove mb-2  d-sm-none d-none"></div>
									)}
								</li>
								<li className="nav-item">
									<a
										className="nav-link mt-2"
										href="#"
										onClick={() => changeNavState(3)}
									>
										Projects
									</a>
									{link === 3 ? (
										<div className="line-under mb-2 ms-auto w-100  d-md-block d-sm-none d-none"></div>
									) : (
										<div className="line-under-remove mb-2  d-sm-none d-none"></div>
									)}
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{/* Header section */}
				<section className="hero container-fluid">
					<div className="row">
						<div className="left-hero col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
							<div>
								<h2 className="text-white fw-bolder">Hi, I'm JERWIN CRUZ</h2>
							</div>
							<div>
								<h4>
									a <span>Professor</span> and a
									<span> Full-stack Developer</span>
								</h4>
							</div>
							<div>
								<ul className="d-flex justify-content-start">
									<li>
										<a href="https://www.frontendmentor.io/profile/cruz-jerwin15">
											<Icon
												icon="simple-icons:frontendmentor"
												color="white"
												height="2em"
											/>
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/topgun23/">
											<i class="fa-brands fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/jerzcruzzz">
											<i class="fa-brands fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://github.com/cruz-jerwin15">
											<i class="fa-brands fa-github"></i>
										</a>
									</li>
									<li>
										<a href="https://vercel.com/cruz-jerwin15">
											<Icon
												icon="ion:logo-vercel"
												color="white"
												height="2.2em"
											/>
										</a>
									</li>
								</ul>
							</div>
							<div>
								<p className="text-white fs-5">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
									ex iusto suscipit ipsam nostrum saepe, debitis obcaecati amet
									officiis adipisci dolor! Ratione mollitia fugit est voluptates
									deleniti! Dolore, veritatis ipsam! debitis obcaecati amet
									officiis adipisci dolor! Ratione mollitia fugit est voluptates
									deleniti! Dolore, veritatis ipsam!
								</p>
							</div>
						</div>
						<div className="right-hero col-xxl-5 col-xl-5 col-lg-5  d-lg-block d-none">
							<img
								src="https://res.cloudinary.com/codestudio28/image/upload/v1683175208/h9fnm7qcsumuzqqofmby.png"
								alt=""
							/>
						</div>
					</div>
				</section>
			</header>
		</>
	);
}

export default Header;
