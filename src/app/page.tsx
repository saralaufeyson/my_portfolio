import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
	return (
		<main className="p-10">
			<Navbar />
			<About />
			<Education />
			<Project />
			<Contact />
			<Footer />
		</main>
	);
}
