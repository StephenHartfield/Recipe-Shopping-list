import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../../shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
	//newIngredient in the quotes is the alias given to our custom event we created here (EventEmitter). It is Output, 
	//so it may be exposed to parent component shoppinglist.html. Look for newIngredient.
	//@Output('newIngredient') ingredientAdded = new EventEmitter<{ingredientName, ingredientAmount}>();
	@ViewChild('Name') nameRef: ElementRef;
	@ViewChild('Amount') amountRef: ElementRef;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
  }
  onAddIngredient() {
  	const name = this.nameRef.nativeElement.value;
  	const amount = this.amountRef.nativeElement.value;
  	const newIngredient = new Ingredient(name, amount);
  	this.shoppinglistService.onAdd(newIngredient);
  }

  clearInput() {
    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }

  deleteIngredient() {
    this.shoppinglistService.onDelete();
  }
 
}
