import { createServerFn } from "@tanstack/react-start";
import type {
	Ingredient,
	MealDetail,
	MealSummary,
	ParsedIngredient,
} from "../types/meal";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://www.themealdb.com/api/json/v1/1";

export const fetchIngredients = createServerFn({ method: "GET" }).handler(
	async () => {
		const res = await fetch(`${BASE_URL}/list.php?i=list`);
		const data = await res.json();
		return (data.meals ?? []) as Ingredient[];
	},
);

export const fetchMealsByIngredient = createServerFn({ method: "GET" })
	.inputValidator((input: string) => input)
	.handler(async ({ data: ingredientName }: { data: string }) => {
		const res = await fetch(
			`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredientName)}`,
		);
		const data = await res.json();
		return (data.meals ?? []) as MealSummary[];
	});

export const fetchMealDetail = createServerFn({ method: "GET" })
	.inputValidator((input: string) => input)
	.handler(async ({ data: mealId }: { data: string }) => {
		const res = await fetch(`${BASE_URL}/lookup.php?i=${mealId}`);
		const data = await res.json();
		const meal = data.meals?.[0] ?? null;
		return meal as MealDetail | null;
	});

export function parseMealIngredients(meal: MealDetail): ParsedIngredient[] {
	const result: ParsedIngredient[] = [];
	for (let i = 1; i <= 20; i++) {
		const ingredient = meal[`strIngredient${i}`];
		const measure = meal[`strMeasure${i}`];
		if (ingredient?.trim()) {
			result.push({
				ingredient: ingredient.trim(),
				measure: (measure ?? "").trim(),
			});
		}
	}
	return result;
}
