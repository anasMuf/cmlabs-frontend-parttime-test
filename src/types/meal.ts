// Response dari /list.php?i=list
export interface Ingredient {
	idIngredient: string;
	strIngredient: string;
	strDescription: string | null;
	strType: string | null;
	strThumb: string | null;
}

// Response dari /filter.php?i={name}
export interface MealSummary {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
}

// Response dari /lookup.php?i={id}
export interface MealDetail {
	idMeal: string;
	strMeal: string;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strMealThumb: string;
	strYoutube: string;
	strTags: string | null;
	// strIngredient1 sampai strIngredient20 (string | null)
	// strMeasure1 sampai strMeasure20 (string | null)
	[key: string]: string | null; // index signature for ingredient/measure fields
}

// Helper type for parsed ingredient + measure
export interface ParsedIngredient {
	ingredient: string;
	measure: string;
}
