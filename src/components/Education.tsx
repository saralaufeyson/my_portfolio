import React from "react";

export default function Education() {
	return (
		<section className="min-h-screen p-8" id="#education">
			<div className="max-w-4xl mx-auto">
				<div className="flex items-start justify-center gap-4 mb-16">
					<span className="text-[#C88D28] text-4xl">&lt;</span>
					<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica">
						Education
					</h1>
					<span className="text-[#C88D28] text-4xl">&gt;</span>
				</div>

				<div className="relative">
					{/* Timeline entries */}
					<div className="space-y-20">
						<TimelineEntry
							year="2025"
							institution="Presidency University"
							qualification="B.tech CSE"
							active={true}
							isFirst={true}
						/>
						<TimelineEntry
							year="2021"
							institution="Cluny Convent PU College"
							qualification="PU-Science"
							active={false}
						/>
						<TimelineEntry
							year="2018"
							institution="St.Philomenas English School"
							qualification="HighSchool"
							active={false}
							isLast={true}
						/>
					</div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto mt-24">
				<h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#6C2315] to-[#C88D28] bg-[length:200%_200%] bg-[position:14.53%_76.67%] text-6xl font-aclonica my-14">
					My Skills
				</h1>
				<div className="border border-[#DDDFCF] bg-[#0E0D09BF] grid grid-cols-2 p-16">
					<div className="grid place-items-center gap-y-5">
						<div className="flex items-center gap-5">
							<FireActiveIcon />
							<p className="text-4xl font-liber-baskerville text-white">
								Soft Skills
							</p>
						</div>
						<div className="font-liber-baskerville text-white text-2xl list-none space-y-3 pl-4">
							<li> - Adaptability</li>
							<li>- Team leader</li>
							<li>- Creativity</li>
							<li>- Public speaking</li>
						</div>
					</div>
					<div className="grid place-items-center gap-y-5">
						<div className="flex items-center gap-5">
							<FireRedIcon />
							<p className="text-4xl font-liber-baskerville text-white">
								Hard Skills
							</p>
						</div>
						<div className="font-liber-baskerville text-white text-2xl list-none space-y-3 pl-4">
							<li> - UI/UX Designer</li>
							<li>- React Development</li>
							<li>- Java</li>
							<li>- Python</li>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

interface TimelineEntryProps {
	year: string;
	institution: string;
	qualification: string;
	active: boolean;
	isFirst?: boolean;
	isLast?: boolean;
}

const TimelineEntry = ({
	year,
	institution,
	qualification,
	active,
	isFirst,
	isLast,
}: TimelineEntryProps) => {
	return (
		<div className="flex items-start gap-8">
			<div className="w-24 text-white text-4xl font-liber-baskerville">
				{year}
			</div>
			<div className="relative">
				{/* Adjusted vertical line */}

				<div
					className={`absolute left-1/2 w-0.5 bg-[#C88D28] -z-10 ${
						isFirst ? "top-1/2" : "-top-10"
					} ${isLast ? "h-full" : "h-[calc(100%+180px)]"}`}
				/>
				{/* Fire icon positioned with z-index */}
				<div className="relative z-10">
					{active ? <FireActiveIcon /> : <FireInactiveIcon />}
				</div>
			</div>
			<div className="text-white">
				<h2 className="text-4xl font-liber-baskerville mb-2">{institution}</h2>
				<p className="text-3xl font-liber-baskerville">{qualification}</p>
			</div>
		</div>
	);
};

const FireActiveIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="39"
			viewBox="0 0 30 39"
			fill="none"
		>
			<path
				d="M26.9005 18.0369C26.4214 17.4119 25.838 16.8703 25.2964 16.3286C23.9005 15.0786 22.3172 14.1828 20.9839 12.8703C17.8797 9.82861 17.1922 4.80778 19.1714 0.953613C17.1922 1.43278 15.463 2.51611 13.9839 3.70361C8.58803 8.03695 6.46303 15.6828 9.0047 22.2453C9.08803 22.4536 9.17137 22.6619 9.17137 22.9328C9.17137 23.3911 8.85887 23.8078 8.4422 23.9744C7.96303 24.1828 7.46304 24.0578 7.0672 23.7244C6.9422 23.6203 6.85887 23.5161 6.77553 23.3703C4.42137 20.3911 4.04637 16.1203 5.6297 12.7036C2.15053 15.5369 0.254702 20.3286 0.525535 24.8494C0.650535 25.8911 0.775535 26.9328 1.1297 27.9744C1.42137 29.2244 1.98387 30.4745 2.60887 31.5786C4.85887 35.1828 8.7547 37.7661 12.9422 38.2869C17.4005 38.8494 22.1714 38.0369 25.588 34.9536C29.4005 31.4953 30.7339 25.9536 28.7755 21.2036L28.5047 20.6619C28.0672 19.7036 26.9005 18.0369 26.9005 18.0369ZM20.3172 31.1619C19.7339 31.6619 18.7755 32.2036 18.0255 32.4119C15.6922 33.2453 13.3589 32.0786 11.9839 30.7036C14.463 30.1203 15.9422 28.2869 16.3797 26.4328C16.7339 24.7661 16.0672 23.3911 15.7964 21.7869C15.5464 20.2453 15.588 18.9328 16.1505 17.4953C16.5464 18.2869 16.963 19.0786 17.463 19.7036C19.0672 21.7869 21.588 22.7036 22.1297 25.5369C22.213 25.8286 22.2547 26.1203 22.2547 26.4328C22.3172 28.1411 21.5672 30.0161 20.3172 31.1619Z"
				fill="#E69458"
			/>
		</svg>
	);
};

const FireInactiveIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="39"
			viewBox="0 0 30 39"
			fill="none"
		>
			<path
				d="M26.9005 18.0369C26.4214 17.4119 25.838 16.8703 25.2964 16.3286C23.9005 15.0786 22.3172 14.1828 20.9839 12.8703C17.8797 9.82861 17.1922 4.80778 19.1714 0.953613C17.1922 1.43278 15.463 2.51611 13.9839 3.70361C8.58803 8.03695 6.46303 15.6828 9.0047 22.2453C9.08803 22.4536 9.17137 22.6619 9.17137 22.9328C9.17137 23.3911 8.85887 23.8078 8.4422 23.9744C7.96303 24.1828 7.46304 24.0578 7.0672 23.7244C6.9422 23.6203 6.85887 23.5161 6.77553 23.3703C4.42137 20.3911 4.04637 16.1203 5.6297 12.7036C2.15053 15.5369 0.254702 20.3286 0.525535 24.8494C0.650535 25.8911 0.775535 26.9328 1.1297 27.9744C1.42137 29.2244 1.98387 30.4745 2.60887 31.5786C4.85887 35.1828 8.7547 37.7661 12.9422 38.2869C17.4005 38.8494 22.1714 38.0369 25.588 34.9536C29.4005 31.4953 30.7339 25.9536 28.7755 21.2036L28.5047 20.6619C28.0672 19.7036 26.9005 18.0369 26.9005 18.0369ZM20.3172 31.1619C19.7339 31.6619 18.7755 32.2036 18.0255 32.4119C15.6922 33.2453 13.3589 32.0786 11.9839 30.7036C14.463 30.1203 15.9422 28.2869 16.3797 26.4328C16.7339 24.7661 16.0672 23.3911 15.7964 21.7869C15.5464 20.2453 15.588 18.9328 16.1505 17.4953C16.5464 18.2869 16.963 19.0786 17.463 19.7036C19.0672 21.7869 21.588 22.7036 22.1297 25.5369C22.213 25.8286 22.2547 26.1203 22.2547 26.4328C22.3172 28.1411 21.5672 30.0161 20.3172 31.1619Z"
				fill="#D79D4D"
			/>
		</svg>
	);
};

const FireRedIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="39"
			viewBox="0 0 30 39"
			fill="none"
		>
			<path
				d="M26.9005 17.381C26.4214 16.7474 25.838 16.1982 25.2964 15.6491C23.9005 14.3819 22.3172 13.4738 20.9839 12.1433C17.8797 9.05977 17.1922 3.9699 19.1714 0.0627441C17.1922 0.548499 15.463 1.64673 13.9839 2.85055C8.58804 7.24347 6.46303 14.9944 9.0047 21.6471C9.08803 21.8583 9.17137 22.0695 9.17137 22.3441C9.17137 22.8087 8.85887 23.2311 8.4422 23.4001C7.96304 23.6113 7.46304 23.4846 7.0672 23.1467C6.9422 23.0411 6.85887 22.9355 6.77554 22.7876C4.42137 19.7675 4.04637 15.4379 5.6297 11.9743C2.15053 14.8466 0.254702 19.7041 0.525535 24.2871C0.650535 25.3431 0.775535 26.3991 1.1297 27.4551C1.42137 28.7223 1.98387 29.9895 2.60887 31.1088C4.85887 34.7625 8.7547 37.3814 12.9422 37.9094C17.4005 38.4796 22.1714 37.6559 25.588 34.5302C29.4005 31.0243 30.7339 25.4065 28.7755 20.5912L28.5047 20.042C28.0672 19.0705 26.9005 17.381 26.9005 17.381ZM20.3172 30.6864C19.7339 31.1933 18.7755 31.7424 18.0255 31.9536C15.6922 32.7984 13.3589 31.6157 11.9839 30.2218C14.463 29.6304 15.9422 27.7719 16.3797 25.8922C16.7339 24.2026 16.0672 22.8087 15.7964 21.1825C15.5464 19.6196 15.588 18.2891 16.1505 16.8318C16.5464 17.6344 16.963 18.4369 17.463 19.0705C19.0672 21.1825 21.588 22.1118 22.1297 24.9841C22.213 25.2797 22.2547 25.5754 22.2547 25.8922C22.3172 27.624 21.5672 29.5248 20.3172 30.6864Z"
				fill="#B71A1A"
			/>
		</svg>
	);
};
