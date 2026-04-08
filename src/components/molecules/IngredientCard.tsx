import { Link } from "@tanstack/react-router";

interface IngredientCardProps {
	name: string;
	description?: string | null;
	thumbnail?: string | null;
}

export default function IngredientCard({
	name,
	description,
	thumbnail,
}: IngredientCardProps) {
	const imageUrl =
		thumbnail ||
		`${import.meta.env.VITE_INGREDIENT_IMAGE_BASE_URL || "https://www.themealdb.com/images/ingredients/"}${encodeURIComponent(name)}.png`;

	return (
		<Link
			to="/ingredients/$ingredientName"
			params={{ ingredientName: name }}
			className="group no-underline flex flex-col items-center text-center p-6 h-full bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-blue-300"
		>
			<div className="w-24 h-24 mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
				<img
					src={imageUrl}
					alt={name}
					loading="lazy"
					className="w-full h-full object-contain"
				/>
			</div>
			<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors w-full">
				{name}
			</h3>
			{description && (
				<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed w-full">
					{description}
				</p>
			)}
			<div className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
				View Meals →
			</div>
		</Link>
	);
}
