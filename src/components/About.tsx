"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

interface HobbyCardProps {
	title: string;
	description: string;
	image: string;
	className?: string;
}

const HobbyCard = React.memo(
	({ title, description, image, className }: HobbyCardProps) => {
		return (
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`bg-[#02180EBF] w-[80%] rounded-3xl border border-[#FCE0B8] flex ${className} items-center justify-evenly p-10 gap-x-24`}
			>
				<div className="space-y-24">
					<h2 className="text-[#FCE0B8] font-crimson-text text-5xl">{title}</h2>
					<p className="text-white font-liber-baskerville text-3xl max-w-xl">
						{description}
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<Image
						src={image}
						alt={`Illustration for ${title}`}
						width={350}
						height={330}
						priority={false}
					/>
				</motion.div>
			</motion.div>
		);
	},
);

HobbyCard.displayName = "HobbyCard";

export default function About() {
	const [titleIndex, setTitleIndex] = useState(0);
	const titles = ["Cybersec Enthusiast", "UI/UX Designer", "Web Developer"];

	const changeTitle = useCallback(() => {
		setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
	}, [titles.length]);

	useEffect(() => {
		const interval = setInterval(changeTitle, 1500);
		return () => clearInterval(interval);
	}, [changeTitle]);

	const hobbies = useMemo(
		() => [
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
				description: `Another pastime I enjoy is delving into the world of fiction; the excitement within the narratives captivates me. Recently, I've been particularly drawn to "The Lost Symbol" by Dan Brown and "The Hitchhiker's Guide to the Galaxy," which have quickly become my top picks.`,
				image: "/books.svg",
			},
			{
				id: 4,
				title: "Curiosity Drive",
				description: `I'm always eager to acquire new knowledge, which has opened up boundless opportunities and enriched my skill set.`,
				image: "/curious.svg",
			},
		],
		[], // Empty dependency array ensures this is created only once
	);

	return (
		<section className="mt-24 min-h-screen" id="about">
			{/* Name and Dynamic Titles */}
			<div className="space-y-1">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica"
				>
					K Laya Sree
				</motion.h1>
				<motion.h1
					key={titleIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-4xl font-liber-baskerville"
				>
					{titles[titleIndex]}
				</motion.h1>
			</div>

			{/* About Me Section */}
			<div className="mt-40 space-y-5">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica"
				>
					About Me
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="text-[#FCE0B8] font-liber-baskerville text-3xl text-justify"
				>
					I am K Layasree, a final-year B.Tech student in Computer Science and
					Engineering, deeply passionate about understanding and exploring the
					endless advancements in technology. This fascination with innovation
					is what led me to choose my current field of study. Besides my
					academics, I am an active member of Vikasana, the student research and
					development organization at my university. I dedicate a significant
					amount of time to this organization to enhance my knowledge and skills
					in the vast and intricate domain of technology. I&apos;m also an
					experienced UI/UX designer who worked in a startup helping the
					founders with the initial prototype of their application. I&apos;m
					also a cybersecurity enthusiast who has a deep interest in
					understanding human minds, which always flavors the game.
				</motion.p>
			</div>

			{/* Hobbies Section */}
			<div className="my-16">
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica mb-16"
				>
					Things I Love to Do
				</motion.h1>
				<div className="grid place-items-center gap-4 gap-y-20">
					{/* Render hobbies with alternating layout */}
					{hobbies.map((hobby, index) => (
						<HobbyCard
							key={hobby.id}
							title={hobby.title}
							description={hobby.description}
							image={hobby.image}
							className={index % 2 === 0 ? "" : "flex-row-reverse"}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
