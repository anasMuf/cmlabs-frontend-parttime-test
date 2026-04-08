import { Link } from "@tanstack/react-router";
import SectionTitle from "../atoms/SectionTitle";

export default function HeroSection() {
	return (
		<section className="relative py-12 md:py-24">
			<div className="container mx-auto px-4 text-center animate-rise-in">
				<div className="inline-block px-8 py-10 md:px-16 md:py-20 border border-gray-200 bg-white rounded-3xl shadow-sm">
					<span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
						mealapp API website
					</span>
					<SectionTitle>
						See All The <br /> Delicious Foods
					</SectionTitle>
					<p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
						Explore thousands of recipes, ingredients, and culinary inspirations
						through our easy-to-use directory.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							to="/ingredients"
							className="rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-slate-800 hover:-translate-y-1 transition-all no-underline"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
