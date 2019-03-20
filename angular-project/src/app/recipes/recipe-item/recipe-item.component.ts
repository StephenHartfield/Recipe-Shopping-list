import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.recipeService.recipeSelected.emit(this.recipe);
  }

}
