import { createFileRoute } from "@tanstack/react-router";
import ErrorComponent from "#/components/molecules/ErrorComponent";
import MealDetailView from "#/features/meals/MealDetailView";

export const Route = createFileRoute(
	"/ingredients/$ingredientName/meals/$mealId",
)({
	component: RouteComponent,
	errorComponent: ErrorComponent,
});

function RouteComponent() {
	const { ingredientName, mealId } = Route.useParams();

	return <MealDetailView mealId={mealId} ingredientName={ingredientName} />;
}
