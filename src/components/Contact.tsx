"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);

	interface EmailJSResponse {
		text: string;
	}

	interface EmailJSError {
		text: string;
	}

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"YOUR_SERVICE_ID", // Replace with your EmailJS service ID
				"YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
				form.current!,
				"YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
			)
			.then(
				(result: EmailJSResponse) => {
					console.log(result.text);
					alert("Message sent successfully!");
				},
				(error: EmailJSError) => {
					console.log(error.text);
					alert("Failed to send the message, please try again.");
				},
			);
	};

	return (
		<section className="p-4 sm:p-8" id="contact">
			<div className="max-w-6xl mx-auto">
				{/* Responsive Title */}
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] text-4xl sm:text-6xl font-bold my-4 font-aclonica text-center sm:text-left">
					Contact me
				</h1>

				{/* Responsive Subtitle */}
				<p className="text-[#FCE0B8] text-2xl sm:text-4xl font-serif mb-6 text-center sm:text-left">
					Feel free to contact me for collaborations/projects
				</p>

				{/* Responsive Flex Container */}
				<div className="flex flex-col lg:flex-row gap-10">
					{/* Contact Form - Full Width on Mobile, Half Width on Larger Screens */}
					<div className="w-full lg:w-1/2 border-2 border-[#FCE0B8] bg-[#02180E] bg-opacity-75 p-6 sm:p-8 rounded-3xl">
						<form ref={form} onSubmit={sendEmail} className="space-y-6">
							<div className="space-y-6">
								{["Name*:", "EmailId*:", "Subject:", "Your message:"].map(
									(label) => (
										<div key={label} className="flex flex-col gap-2 sm:gap-4">
											<label className="font-serif text-xl sm:text-3xl text-white underline">
												{label}
											</label>
											{label.includes("message") ? (
												<textarea
													name={label.toLowerCase().replace(/\s|\*/g, "")}
													className="bg-transparent border-b-2 border-dashed border-[#534D46] p-2 text-sm sm:text-base w-full min-h-[100px]"
													required={label.includes("*")}
												/>
											) : (
												<input
													type={
														label.toLowerCase().includes("email")
															? "email"
															: "text"
													}
													name={label.toLowerCase().replace(/\s|\*/g, "")}
													className="bg-transparent border-b-2 border-dashed border-[#534D46] p-2 text-sm sm:text-base w-full"
													required={label.includes("*")}
												/>
											)}
										</div>
									),
								)}
							</div>
							<div className="flex justify-center">
								<button
									type="submit"
									className="bg-[#FCE0B8] rounded-2xl px-6 sm:px-8 py-2 sm:py-3 font-serif text-[#1F493D] text-xl sm:text-2xl hover:bg-[#1F493D] hover:text-[#FCE0B8] transition-colors"
								>
									Submit
								</button>
							</div>
						</form>
					</div>

					{/* Social Media Links - Full Width on Mobile, Half Width on Larger Screens */}
					<div className="w-full lg:w-1/2 flex flex-col justify-end">
						<h2 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] text-4xl sm:text-6xl font-bold my-4 text-center sm:text-right font-aclonica">
							My Social media
						</h2>
						<div className="w-full border-2 border-[#FCE0B8] bg-[#02180E] bg-opacity-75 p-6 rounded-3xl">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									{
										icon: "/linkedin.svg",
										text: "/laya",
										href: "https://linkedin.com/in/laya",
									},
									{
										icon: "/github.svg",
										text: "/saralaufeyson",
										href: "https://github.com/saralaufeyson",
									},
									{
										icon: "/blog-icon.svg",
										text: "/momentu-mosiac",
										href: "#",
									},
									{ icon: "/resume.svg", text: "/layaresume.pdf", href: "#" },
									{
										icon: "/mail.svg",
										text: "/layasree81103@gmail.com",
										href: "mailto:layasree81103@gmail.com",
									},
								].map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className="flex items-center gap-4 hover:opacity-80 transition-opacity"
									>
										<Image
											src={item.icon}
											alt={`${item.text} icon`}
											width={40}
											height={40}
											className="object-contain"
										/>
										<span className="font-crimson-text text-base sm:text-2xl text-white">
											{item.text}
										</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
