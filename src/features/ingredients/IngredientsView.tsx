import { Suspense, useState } from "react";
import SectionTitle from "#/components/atoms/SectionTitle";
import SearchInput from "#/components/molecules/SearchInput";
import { IngredientGridSkeleton } from "#/components/molecules/Skeletons";
import IngredientGrid from "#/components/organisms/IngredientGrid";
import { useIngredients } from "#/hooks/use-ingredients";

function IngredientsContent({ searchQuery }: { searchQuery: string }) {
	const { data: ingredients } = useIngredients();
	return <IngredientGrid ingredients={ingredients} searchQuery={searchQuery} />;
}

export default function IngredientsView() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<main className="page-wrap py-12">
			<div className="container mx-auto px-4">
				<SectionTitle>Ingredients</SectionTitle>
				<SearchInput
					value={searchQuery}
					onChange={setSearchQuery}
					placeholder="Search ingredients..."
				/>
				<Suspense fallback={<IngredientGridSkeleton />}>
					<IngredientsContent searchQuery={searchQuery} />
				</Suspense>
			</div>
		</main>
	);
}
