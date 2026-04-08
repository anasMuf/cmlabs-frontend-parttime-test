import HeroSection from "#/components/organisms/HeroSection";

export default function HomeView() {
	return (
		<main className="page-wrap pb-20">
			<HeroSection />

			{/* Featured Section placeholder or other home content */}
			<section className="container mx-auto px-4 mt-20 text-center">
				<div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
					<h2 className="text-2xl font-bold text-slate-900 mb-4">
						Discover Your Next Favorite Meal
					</h2>
					<p className="text-gray-500">
						Search through our comprehensive list of ingredients and find the
						perfect recipe for tonight.
					</p>
				</div>
			</section>
		</main>
	);
}
