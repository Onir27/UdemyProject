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
    new Recipe('French Fry', 'Deep fried potato sticks', 'https://pixabay.com/en/french-fries-food-french-plate-1351062/'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
