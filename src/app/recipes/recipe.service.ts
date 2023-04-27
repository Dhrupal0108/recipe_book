import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Testy Manchuriam',
      'A Chienese Starter',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
      [new Ingredient('capsicum', 2), new Ingredient('Cauliflower', 2)]
    ),
    new Recipe(
      'Panner Chilli',
      'Indian Punjabi Starter',
      'https://recipesofhome.com/wp-content/uploads/2020/02/chilli-paneer-recipe.jpg',
      [new Ingredient('Panner', 15), new Ingredient('Chilli', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
   return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
