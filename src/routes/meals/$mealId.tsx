import { createFileRoute } from "@tanstack/react-router";
import ErrorComponent from "#/components/molecules/ErrorComponent";
import MealDetailView from "#/features/meals/MealDetailView";

export const Route = createFileRoute("/meals/$mealId")({
	component: () => {
		const { mealId } = Route.useParams();
		return <MealDetailView mealId={mealId} />;
	},
	errorComponent: ErrorComponent,
});
