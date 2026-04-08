import type { Ingredient } from "#/types/meal";
import IngredientCard from "../molecules/IngredientCard";

interface IngredientGridProps {
	ingredients: Ingredient[];
	searchQuery: string;
}

export default function IngredientGrid({
	ingredients,
	searchQuery,
}: IngredientGridProps) {
	const filteredIngredients = ingredients.filter((ing) =>
		ing.strIngredient.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	if (filteredIngredients.length === 0) {
		return (
			<div className="text-center py-20 animate-rise-in">
				<p className="text-lg text-gray-500">
					No ingredients found for "{searchQuery}"
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-rise-in">
			{filteredIngredients.map((item, index) => (
				<div
					key={item.idIngredient}
					style={{ animationDelay: `${index * 50}ms` }}
					className="animate-rise-in fill-mode-backwards"
				>
					<IngredientCard
						name={item.strIngredient}
						description={item.strDescription}
						thumbnail={item.strThumb}
					/>
				</div>
			))}
		</div>
	);
}
