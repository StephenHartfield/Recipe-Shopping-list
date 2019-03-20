export class Ingredient {
	//normally, we would have the two lines below here, but see how we work around with a shortcut.
	//public name: string;
	//public amount: number;

	//within the parenthesis is the shortcut from typescript. We also can comment out the two lines below constructor.
	constructor(public name: string, public amount: number) {
		//this.name = name;
		//this.amount = amount;
	}
}