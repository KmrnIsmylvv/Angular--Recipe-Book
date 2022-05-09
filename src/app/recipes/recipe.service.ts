import {EventEmitter} from "@angular/core";

import {Recipe} from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is simply a test', 'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe('Test Recipe2', 'this is simply a test', 'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
