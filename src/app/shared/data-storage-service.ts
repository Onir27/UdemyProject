import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
    constructor(private httpService: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.httpService.put('https://ngrecipebook-5ed05.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.httpService.get('https://ngrecipebook-5ed05.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                console.log('getting data');
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                        console.log(recipe);
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
