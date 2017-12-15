import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { nearer } from 'q';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('French Fry', 'Deep fried potato sticks', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('French Fry', 'Deep fried potato sticks', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
