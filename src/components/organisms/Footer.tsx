export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-200 bg-gray-50 mt-auto">
			<div className="container mx-auto px-4 py-8 text-center">
				<p className="text-sm text-gray-500">
					© {currentYear} MealApp. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
