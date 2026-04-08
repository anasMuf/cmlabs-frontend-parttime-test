import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchMealsByIngredient } from "../services/api";

export function useMealsByIngredient(ingredientName: string) {
	return useSuspenseQuery({
		queryKey: ["meals", ingredientName],
		queryFn: () => fetchMealsByIngredient({ data: ingredientName }),
	});
}
