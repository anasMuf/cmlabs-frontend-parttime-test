import { createFileRoute } from "@tanstack/react-router";
import ErrorComponent from "#/components/molecules/ErrorComponent";
import IngredientDetailView from "#/features/ingredients/IngredientDetailView";

export const Route = createFileRoute("/ingredients/$ingredientName/")({
	component: () => {
		const { ingredientName } = Route.useParams();
		return <IngredientDetailView ingredientName={ingredientName} />;
	},
	errorComponent: ErrorComponent,
});
