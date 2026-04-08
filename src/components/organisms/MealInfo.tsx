import { parseMealIngredients } from "#/services/api";
import type { MealDetail } from "#/types/meal";
import SectionTitle from "../atoms/SectionTitle";
import Tag from "../atoms/Tag";

interface MealInfoProps {
	meal: MealDetail;
}

export default function MealInfo({ meal }: MealInfoProps) {
	const ingredients = parseMealIngredients(meal);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-rise-in">
			{/* Left Column: Image and Tags */}
			<div className="space-y-6">
				<div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm border border-gray-200">
					<img
						src={meal.strMealThumb ?? ""}
						alt={meal.strMeal ?? "Meal Image"}
						className="object-cover w-full h-full"
					/>
					<div className="absolute top-4 left-4 flex flex-wrap gap-2">
						{meal.strCategory && <Tag variant="accent">{meal.strCategory}</Tag>}
						{meal.strArea && <Tag>{meal.strArea}</Tag>}
					</div>
				</div>

				<div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
					<h3 className="text-xl font-bold text-slate-900 mb-4">Recipes</h3>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{ingredients.map((item) => (
							<li
								key={item.ingredient}
								className="flex items-start gap-2 text-sm"
							>
								<span className="text-blue-600 font-bold">•</span>
								<span className="font-semibold text-slate-900">
									{item.measure}
								</span>
								<span className="text-gray-500">{item.ingredient}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Right Column: Instructions */}
			<div className="flex flex-col">
				<SectionTitle as="h1">{meal.strMeal}</SectionTitle>

				<div className="mt-8 space-y-6">
					<div className="flex items-center gap-2">
						<div className="h-px flex-1 bg-gray-200" />
						<span className="text-xs font-bold uppercase tracking-widest text-gray-400">
							Instructions
						</span>
						<div className="h-px flex-1 bg-gray-200" />
					</div>

					<div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
						{meal.strInstructions?.split("\r\n").map(
							(para, i) =>
								para && (
									// biome-ignore lint/suspicious/noArrayIndexKey: instructions are static
									<p key={i} className="mb-4">
										{para}
									</p>
								),
						)}
					</div>
				</div>

				{meal.strTags && (
					<div className="mt-auto pt-8 border-t border-gray-200 flex flex-wrap gap-2">
						{meal.strTags.split(",").map((tag) => (
							<span
								key={tag}
								className="text-xs font-medium text-gray-400 italic"
							>
								#{tag.trim()}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
