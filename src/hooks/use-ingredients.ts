import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchIngredients } from "../services/api";

export function useIngredients() {
	return useSuspenseQuery({
		queryKey: ["ingredients"],
		queryFn: () => fetchIngredients(),
	});
}
