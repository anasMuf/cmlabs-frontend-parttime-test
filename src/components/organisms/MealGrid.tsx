import type { MealSummary } from "#/types/meal";
import MealCard from "../molecules/MealCard";

interface MealGridProps {
	meals: MealSummary[];
	searchQuery: string;
	ingredientName: string;
}

export default function MealGrid({
	meals,
	searchQuery,
	ingredientName,
}: MealGridProps) {
	const filteredMeals = meals.filter((meal) =>
		meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	if (filteredMeals.length === 0) {
		return (
			<div className="text-center py-20 animate-rise-in">
				<p className="text-lg text-gray-500">
					No meals found for "{searchQuery}"
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-rise-in">
			{filteredMeals.map((meal, index) => (
				<div
					key={meal.idMeal}
					style={{ animationDelay: `${index * 50}ms` }}
					className="animate-rise-in fill-mode-backwards"
				>
					<MealCard
						id={meal.idMeal}
						name={meal.strMeal}
						thumbnail={meal.strMealThumb}
						ingredientName={ingredientName}
					/>
				</div>
			))}
		</div>
	);
}
