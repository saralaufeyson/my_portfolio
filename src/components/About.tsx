import Image from "next/image";
import React from "react";

export default function About() {
	const hobbies = [
		{
			id: 1,
			title: "Professional Dancer",
			description:
				"I've been dedicated to mastering a classical dance form for the last nine years, a journey I'm still passionately pursuing. It's not just a discipline—it's a source of tranquility and a way to unwind for me.",
			image: "/dance.svg",
		},
		{
			id: 2,
			title: "Singer",
			description:
				"Singing from the heart is a beautiful way to express yourself, and it's wonderful that you've received positive feedback on your voice.",
			image: "/singer.svg",
		},
		{
			id: 3,
			title: "Reading Fictional Books",
			description: `Another pastime I enjoy is delving into the world of fiction; the excitement within the narratives captivates me. Recently, I've been particularly drawn to &quot;The Lost Symbol&quot; by Dan Brown and quot;The Hitchhiker's Guide to the Galaxy,quot; which have quickly become my top picks.`,
			image: "/books.svg",
		},
		{
			id: 4,
			title: "Curiosity drive",
			description: `I'm always eager to acquire new knowledge, which has opened up boundless opportunities and enriched my skill set.`,
			image: "/curious.svg",
		},
	];

	interface HobbyCardProps {
		title: string;
		description: string;
		image: string;
		className?: string;
	}

	const HobbyCard = ({
		title,
		description,
		image,
		className,
	}: HobbyCardProps) => {
		return (
			<div
				className={`bg-[#02180EBF] w-[80%] rounded-3xl border border-[#FCE0B8] flex ${className} items-center justify-evenly p-10 gap-x-24`}
			>
				<div className="space-y-24">
					<h2 className="text-[#FCE0B8] font-crimson-text text-5xl">{title}</h2>
					<p className="text-white font-liber-baskerville text-3xl max-w-xl">
						{description}
					</p>
				</div>
				<div>
					<Image src={image} alt="image" width={350} height={330} />
				</div>
			</div>
		);
	};

	return (
		<section className="mt-24" id="#about">
			<div className="space-y-1">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica">
					K Laya Sree
				</h1>
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-4xl font-liber-baskerville">
					Cybersec Enthusiast
				</h1>
			</div>
			<div className="mt-40 space-y-5">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica">
					About Me
				</h1>
				<p className="text-[#FCE0B8] font-liber-baskerville text-3xl text-justify">
					I am K Layasree ,a final-year B.Tech student in Computer Science and
					Engineering, deeply passionate about understanding and exploring the
					endless advancements in technology. This fascination with innovation
					is what led me to choose my current field of study. Besides my
					academics, I am an active member of Vikasana, the student research and
					development organization at my university. I dedicate a significant
					amount of time to this organization to enhance my knowledge and skills
					in the vast and intricate domain of technology. Im also an expereinced
					UI/UX designer who worked in a startup helping the founders with the
					initial prototype of their application. Im also a cybersecurity
					enthusiast who has a deep intrest in understanding human minds which
					always flavours the game
				</p>
			</div>
			<div className="my-16">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica mb-16">
					Things i love to do
				</h1>
				<div className="grid place-items-center gap-4 gap-y-20">
					{hobbies.slice(0, 1).map((hobby) => (
						<HobbyCard
							key={hobby.id}
							title={hobby.title}
							description={hobby.description}
							image={hobby.image}
						/>
					))}
					{hobbies.slice(1, 2).map((hobby) => (
						<HobbyCard
							key={hobby.id}
							title={hobby.title}
							description={hobby.description}
							image={hobby.image}
							className="flex-row-reverse"
						/>
					))}
					{hobbies.slice(2, 3).map((hobby) => (
						<HobbyCard
							key={hobby.id}
							title={hobby.title}
							description={hobby.description}
							image={hobby.image}
						/>
					))}
					{hobbies.slice(3, 4).map((hobby) => (
						<HobbyCard
							key={hobby.id}
							title={hobby.title}
							description={hobby.description}
							image={hobby.image}
							className="flex-row-reverse"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
