// src/app/pages/recipe-edit/recipe-edit.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.page.html'
})
export class RecipeEditPage implements OnInit {
  recipeId: string | null = null;
  recipe: Recipe = { name: '', description: '', ingredients: [], instructions: '' };
  ingredientsString: string = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.loadRecipe();
  }

  loadRecipe() {
    if (this.recipeId) {
      this.recipeService.getRecipeById(this.recipeId).subscribe(data => {
        if (data) {
          this.recipe = data;
          this.ingredientsString = this.recipe.ingredients.join(', ');
        }
      });
    }
  }

  updateRecipe() {
    if (this.recipeId) {
      this.recipe.ingredients = this.ingredientsString.split(',').map((ingredient: string) => ingredient.trim());
      this.recipeService.updateRecipe(this.recipeId, this.recipe).then(() => {
        console.log('Recette mise à jour avec succès');
        this.router.navigate(['/recipe-detail', this.recipeId]);
      });
    }
  }
}