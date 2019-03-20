import {EventEmitter} from '@angular/core';

import {Recipe} from '../recipes/recipe.model';

export class RecipeService {
	private recipes = [
		new Recipe('Old Recipe', 'a Decent Recipe, for an amazing meal that you will enjoy so much!', 
			'https://previews.123rf.com/images/carmenbobo/carmenbobo1506/carmenbobo150600055/40704095-rubber-stamp-with-text-recipe-for-success-inside-vector-illustration.jpg'), 
		new Recipe('New Recipe', 'a Grand Recipe, for an amazing meal that you will enjoy so much!', 
			'https://previews.123rf.com/images/carmenbobo/carmenbobo1506/carmenbobo150600055/40704095-rubber-stamp-with-text-recipe-for-success-inside-vector-illustration.jpg')
		];

	getRecipes() {
		return this.recipes.slice();
	}

	recipeSelected = new EventEmitter<Recipe>();
}