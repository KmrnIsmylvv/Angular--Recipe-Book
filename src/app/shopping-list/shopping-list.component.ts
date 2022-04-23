import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 5),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }

}
