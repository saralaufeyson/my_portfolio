import Image from "next/image";

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

	return (
		<section className="min-h-screen p-8" id="#project">
			<div className="max-w-6xl mx-auto">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica my-14">
					My Project Works
				</h1>
				<div className="grid grid-cols-2 items-center gap-x-20 my-10">
					<div className="space-y-10">
						{projects.map((project) => (
							<div
								key={project.id}
								className={`bg-[#02180EBF] w-full rounded-3xl border border-[#FCE0B8] p-10 space-y-6`}
							>
								<h2 className="text-[#FCE0B8] font-crimson-text text-4xl">
									{project.title}
								</h2>
								<p className="text-white font-liber-baskerville text-2xl max-w-xl">
									{project.desc}
								</p>
							</div>
						))}
					</div>
					<div className="space-y-10">
						<div
							className={`bg-[#02180EBF] w-full rounded-3xl border border-[#FCE0B8] flex items-center justify-evenly p-10 gap-x-10`}
						>
							<Image src={"blog.svg"} alt="image" width={150} height={130} />
							<h2 className="text-[#FCE0B8] font-crimson-text text-5xl">
								Visit my blog
							</h2>
						</div>
					</div>
				</div>
				<p className="text-white font-liber-baskerville text-2xl text-center">
					VIEW ALL PROJECTS
				</p>
			</div>
		</section>
	);
}
