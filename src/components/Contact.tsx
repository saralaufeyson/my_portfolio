import Image from "next/image";
import Link from "next/link";

export default function Contact() {
	return (
		<section className="p-8" id="contact">
			<div className="max-w-6xl mx-auto">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] text-6xl font-bold my-4 font-aclonica">
					Contact me
				</h1>
				<p className="text-[#FCE0B8] text-4xl font-serif mb-6">
					Feel free to contact me for collaborations/projects
				</p>

				<div className="flex flex-col md:flex-row gap-10">
					{/* Contact Form */}
					<div className="w-full md:w-1/2 border-2 border-[#FCE0B8] bg-[#02180E] bg-opacity-75 p-8 rounded-3xl">
						<form className="space-y-6">
							<div className="space-y-6">
								{["Name*:", "EmailId*:", "Subject:", "Your message:"].map(
									(label) => (
										<div
											key={label}
											className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
										>
											<label className="font-serif text-2xl sm:text-3xl text-white underline min-w-[180px]">
												{label}
											</label>
											{label.includes("message") ? (
												<textarea
													className="bg-transparent border-b-2 border-dashed border-[#534D46] p-2.5 w-full min-h-[100px]"
													required={label.includes("*")}
												/>
											) : (
												<input
													type={
														label.toLowerCase().includes("email")
															? "email"
															: "text"
													}
													className="bg-transparent border-b-2 border-dashed border-[#534D46] p-2.5 w-full"
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
									className="bg-[#FCE0B8] rounded-2xl px-8 py-3 font-serif text-[#1F493D] text-2xl hover:bg-[#1F493D] transition-colors"
								>
									Submit
								</button>
							</div>
						</form>
					</div>

					{/* Social Media Links */}
					<div className="w-full md:w-1/2 flex flex-col justify-end">
						<h2 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] text-6xl font-bold my-4 text-right font-aclonica">
							My Social media
						</h2>
						<div className="w-full border-2 border-[#FCE0B8] bg-[#02180E] bg-opacity-75 p-6 rounded-3xl space-y-4 grid grid-cols-2 gap-4">
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
										width={50}
										height={50}
										className="object-contain"
									/>
									<span className="font-crimson-text text-2xl sm:text-3xl text-white">
										{item.text}
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
