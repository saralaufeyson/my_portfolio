"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Project() {
	const projects = [
		{
			id: 1,
			title: "Trade planner",
			desc: "A web application that helps you plan your trades and manage your portfolio.",
		},
		{
			id: 2,
			title: "Text to IEEE converter",
			desc: "A simple web application that converts text to IEEE format.",
		},
		{
			id: 3,
			title: "Shopping portal",
			desc: "A shopping portal where you can buy your favorite products.",
		},
		{
			id: 4,
			title: "Research on Cloud Cryptography",
			desc: "A research paper on cloud cryptography and its applications.",
		},
	];

	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className="min-h-screen p-4 sm:p-8" id="project">
			<div className="max-w-6xl mx-auto">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-4xl sm:text-6xl font-aclonica my-8 sm:my-14 text-center sm:text-left">
					My Project Works
				</h1>

				{/* Mobile & Desktop Responsive Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-20 my-10 space-y-10 md:space-y-0">
					{/* Projects List - Responsive Layout */}
					<div className="space-y-6 sm:space-y-10 w-full">
						{projects.map((project) => (
							<div
								key={project.id}
								className={`bg-[#02180EBF] w-full rounded-3xl border border-[#FCE0B8] p-6 sm:p-10 space-y-4 sm:space-y-6`}
							>
								<h2 className="text-[#FCE0B8] font-crimson-text text-2xl sm:text-4xl">
									{project.title}
								</h2>
								<p className="text-white font-liber-baskerville text-lg sm:text-2xl">
									{project.desc}
								</p>
							</div>
						))}
					</div>

					{/* Blog Link - Responsive Card */}
					<Link
						href={"https://momentum-mosiac-laya.blogspot.com/"}
						target="_blank"
						className="w-full mt-6 md:mt-0"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<div
							className={`bg-[#02180EBF] text-[#FCE0B8] hover:bg-[#FCE0B8] hover:text-[#02180EBF] w-full rounded-3xl border border-[#FCE0B8] flex flex-col sm:flex-row items-center justify-center sm:justify-evenly p-6 sm:p-10 gap-y-4 sm:gap-y-0 sm:gap-x-10 cursor-pointer`}
						>
							<Image
								src={"/blog.svg"}
								alt="Blog Icon"
								width={100}
								height={100}
								className="mb-4 sm:mb-0"
							/>
							<h2 className="text-[#FCE0B8] hover:text-[#02180EBF] font-crimson-text text-3xl sm:text-5xl text-center">
								{isHovered ? "Momentum Mosiac" : "Visit my blog"}
							</h2>
						</div>
					</Link>
				</div>

				{/* View All Projects Link - Responsive */}
				<Link href={"/projects"} className="block">
					<p className="text-white font-liber-baskerville text-xl sm:text-2xl text-center mt-8 sm:mt-0 hover:underline">
						VIEW ALL PROJECTS
					</p>
				</Link>
			</div>
		</section>
	);
}
