import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

import {ShoppinglistService} from '../../shared/shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
	ingredients: Ingredient[];
	
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
  	this.ingredients = this.shoppinglistService.ingredients;
  }
  
}
