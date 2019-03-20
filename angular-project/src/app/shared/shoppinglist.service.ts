import {Ingredient} from './ingredient.model';

export class ShoppinglistService {
	ingredients = [
		{
		name: 'Salt',
		amount: 2
		},
		{
			name: 'Ketchup',
			amount: 1
		}
	];

	onAdd(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
	}
	onDelete() {
		this.ingredients.pop();
	}
}