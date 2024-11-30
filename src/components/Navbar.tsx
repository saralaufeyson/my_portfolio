"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	const navData = [
		{
			id: 0,
			name: "About",
			link: "about",
		},
		{
			id: 1,
			name: "Education",
			link: "education",
		},
		{
			id: 2,
			name: "Project Works",
			link: "project",
		},
		{
			id: 3,
			name: "Contact",
			link: "contact",
		},
	];

	const [active, setActive] = useState("about");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	interface NavItem {
		id: number;
		name: string;
		link: string;
	}

	const handleNavItemClick = (link: string): void => {
		setActive(link);
		setMobileMenuOpen(false);
		const element = document.getElementById(link);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const sections = navData.map((item) =>
				document.getElementById(item.link),
			);
			const currentSection = sections.findIndex((section) => {
				if (section) {
					const offsetTop = section.offsetTop;
					const offsetBottom = offsetTop + section.offsetHeight;
					return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
				}
				return false;
			});
			if (currentSection !== -1) {
				setActive(navData[currentSection].link);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="p-4 flex items-center justify-start relative">
			{/* Logo */}
			<Link href={"/"}>
				<div>
					<Image
						src="/lamp.svg"
						alt="logo"
						width={30}
						height={30}
						className="mr-10"
					/>
				</div>
			</Link>

			{/* Desktop Navigation */}
			<div className="md:flex items-center space-x-4 hidden">
				{navData.map((data) => (
					<li
						key={data.id}
						onClick={() => handleNavItemClick(data.link)}
						className={`text-[#FCE0B8] font-crimson-text text-3xl cursor-pointer list-none 
              ${
								active === data.link
									? "underline underline-offset-8 decoration-[#FCE0B8]"
									: ""
							}`}
					>
						<button className="focus:outline-none focus:ring-2 focus:ring-[#FCE0B8] focus:ring-opacity-50 rounded-md p-2">
							{data.name}
						</button>
					</li>
				))}
			</div>

			{/* Name */}
			{/* <p className="absolute left-1/2 transform -translate-x-1/2 flex items-center bg-gradient-to-r from-[#C88D28] to-[#88431B] bg-clip-text text-transparent font-aclonica text-3xl decoration-solid cursor-pointer max-md:text-xl">
				K LAYA SREE
			</p> */}

			{/* Mobile Menu Toggle */}
			<div className="md:hidden">
				<button
					onClick={toggleMobileMenu}
					className="text-[#FCE0B8] focus:outline-none focus:ring-2 focus:ring-[#FCE0B8] focus:ring-opacity-50 rounded-md p-2"
					aria-expanded={mobileMenuOpen}
					aria-label="Toggle navigation menu"
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-black/90 z-50">
					<ul className="flex flex-col items-center space-y-4 py-4">
						{navData.map((data) => (
							<li
								key={data.id}
								onClick={() => handleNavItemClick(data.link)}
								className={`text-[#FCE0B8] font-crimson-text text-2xl cursor-pointer 
                  ${
										active === data.link
											? "underline underline-offset-8 decoration-[#C88D28]"
											: ""
									}`}
							>
								<button className="focus:outline-none focus:ring-2 focus:ring-[#FCE0B8] focus:ring-opacity-50 rounded-md p-2">
									{data.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
