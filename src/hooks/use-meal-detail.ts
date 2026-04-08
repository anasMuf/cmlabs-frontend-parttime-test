import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchMealDetail } from "../services/api";

export function useMealDetail(mealId: string) {
	return useSuspenseQuery({
		queryKey: ["meal", mealId],
		queryFn: () => fetchMealDetail({ data: mealId }),
	});
}
