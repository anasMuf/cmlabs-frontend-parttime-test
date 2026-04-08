import { Suspense } from "react";
import Breadcrumb from "#/components/molecules/Breadcrumb";
import { MealInfoSkeleton } from "#/components/molecules/Skeletons";
import VideoEmbed from "#/components/molecules/VideoEmbed";
import MealInfo from "#/components/organisms/MealInfo";
import { useMealDetail } from "#/hooks/use-meal-detail";

interface MealDetailViewProps {
	mealId: string;
	ingredientName: string;
}

function MealContent({
	mealId,
	ingredientName,
}: { mealId: string; ingredientName: string }) {
	const { data: meal } = useMealDetail(mealId);
	if (!meal) return null;

	return (
		<>
			<Breadcrumb
				items={[
					{ label: "Home", to: "/" },
					{ label: "Ingredients", to: "/ingredients" },
					{
						label: ingredientName,
						to: `/ingredients/${encodeURIComponent(ingredientName)}`,
					},
					{ label: meal.strMeal },
				]}
			/>
			<MealInfo meal={meal} />
			<VideoEmbed youtubeUrl={meal.strYoutube} />
		</>
	);
}

export default function MealDetailView({
	mealId,
	ingredientName,
}: MealDetailViewProps) {
	return (
		<main className="page-wrap py-12">
			<div className="container mx-auto px-4">
				<Suspense fallback={<MealInfoSkeleton />}>
					<MealContent mealId={mealId} ingredientName={ingredientName} />
				</Suspense>
			</div>
		</main>
	);
}
