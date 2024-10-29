// src/app/pages/recipe-detail/recipe-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'], // Assurez-vous que le fichier de style existe
})
export class RecipeDetailPage implements OnInit {
  recipeId: string | null = null;
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    console.log('ID de la recette:', this.recipeId); // Debugging pour vérifier l'ID récupéré
    this.loadRecipe();
  }

  loadRecipe() {
    if (this.recipeId) {
      this.recipeService.getRecipeById(this.recipeId).subscribe(
        data => {
          this.recipe = data;
          console.log('Recette chargée:', this.recipe); // Debugging pour voir la recette chargée
        },
        error => {
          console.error('Erreur lors de la récupération de la recette:', error);
        }
      );
    } else {
      console.error('Aucun ID de recette fourni.');
    }
  }
  goBack() {
    this.router.navigate(['/home']); 
  }

  navigateToEdit() {
    if (this.recipeId) {
      this.router.navigate(['/recipe-edit', this.recipeId]);
    }
  }

}
