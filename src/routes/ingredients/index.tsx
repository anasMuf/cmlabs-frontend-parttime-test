import { createFileRoute } from "@tanstack/react-router";
import ErrorComponent from "#/components/molecules/ErrorComponent";
import IngredientsView from "#/features/ingredients/IngredientsView";

export const Route = createFileRoute("/ingredients/")({
	component: IngredientsView,
	errorComponent: ErrorComponent,
});
