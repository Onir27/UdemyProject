import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService {
    constructor(private httpService: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.httpService.put('https://ngrecipebook-5ed05.firebaseio.com/recipes.json?auth=' + token,
        this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpService.get('https://ngrecipebook-5ed05.firebaseio.com/recipes.json?auth=' + token)
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
