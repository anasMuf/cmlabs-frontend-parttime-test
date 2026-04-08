import { Suspense, useState } from "react";
import SectionTitle from "#/components/atoms/SectionTitle";
import Breadcrumb from "#/components/molecules/Breadcrumb";
import SearchInput from "#/components/molecules/SearchInput";
import { MealGridSkeleton } from "#/components/molecules/Skeletons";
import MealGrid from "#/components/organisms/MealGrid";
import { useMealsByIngredient } from "#/hooks/use-meals-by-ingredient";

interface IngredientDetailViewProps {
	ingredientName: string;
}

function IngredientContent({
	ingredientName,
	searchQuery,
}: {
	ingredientName: string;
	searchQuery: string;
}) {
	const { data: meals } = useMealsByIngredient(ingredientName);
	return <MealGrid meals={meals} searchQuery={searchQuery} />;
}

export default function IngredientDetailView({
	ingredientName,
}: IngredientDetailViewProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const imageUrl = `${import.meta.env.VITE_INGREDIENT_IMAGE_BASE_URL || "https://www.themealdb.com/images/ingredients/"}${encodeURIComponent(ingredientName)}.png`;

	return (
		<main className="page-wrap py-12">
			<div className="container mx-auto px-4">
				<Breadcrumb
					items={[
						{ label: "Home", to: "/" },
						{ label: "Ingredients", to: "/ingredients" },
						{ label: ingredientName },
					]}
				/>

				<div className="flex flex-col md:flex-row items-center gap-6 mb-12 animate-rise-in">
					<div className="w-32 h-32 p-4 bg-white border border-gray-200 rounded-3xl shadow-sm shrink-0">
						<img
							src={imageUrl}
							alt={ingredientName}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="text-center md:text-left">
						<SectionTitle>{ingredientName} Meals</SectionTitle>
						<p className="text-gray-500 mt-1">
							Discover all recipes that feature {ingredientName} as a main ingredient.
						</p>
					</div>
				</div>

				<SearchInput
					value={searchQuery}
					onChange={setSearchQuery}
					placeholder={`Search ${ingredientName} meals...`}
				/>

				<Suspense fallback={<MealGridSkeleton />}>
					<IngredientContent
						ingredientName={ingredientName}
						searchQuery={searchQuery}
					/>
				</Suspense>
			</div>
		</main>
	);
}
