import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  recipes: any[] = [];

  constructor(public recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  navigateToDetail(recipeId: string) {
    this.router.navigate(['/recipe-detail', recipeId]);
  }

  navigateToCreate() {
    this.router.navigate(['/recipe-create']);
  }

  deleteRecipe(recipeId: string, event: Event) {
    event.stopPropagation();
    this.recipeService.deleteRecipe(recipeId)
      .then(() => console.log("Recipe deleted successfully"))
      .catch(error => console.error("Error deleting recipe:", error));
  }

  logout() {
    // Logique de déconnexion
    console.log("Déconnexion réussie");
    this.router.navigate(['/login']);
  }
}