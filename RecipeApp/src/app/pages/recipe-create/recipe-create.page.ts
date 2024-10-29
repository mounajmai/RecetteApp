import { Component } from '@angular/core';
import { RecipeService, Recipe } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importer AlertController

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.page.html'
})
export class RecipeCreatePage {
  recipe: Recipe = { name: '', description: '', ingredients: [], instructions: '' };

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private alertController: AlertController // Injecter AlertController ici
  ) {}

  async createRecipe() {
    // S'assurer que les ingrédients sont un tableau
    this.recipe.ingredients = this.recipe.ingredients.toString().split(',').map((ingredient: string) => ingredient.trim());

    try {
      await this.recipeService.createRecipe(this.recipe); // Attendre la création de la recette
      console.log('Recette créée avec succès');

      // Afficher l'alerte de succès
      const alert = await this.alertController.create({
        header: 'Succès',
        message: 'Recette créée avec succès!',
        buttons: ['OK'] // Bouton pour fermer l'alerte
      });

      await alert.present(); // Présenter l'alerte

      this.router.navigate(['/home']); // Redirige vers la page d'accueil après la création
    } catch (error) {
      console.error('Erreur lors de la création de la recette:', error);
      // Optionnel : afficher une alerte d'erreur
      const alertError = await this.alertController.create({
        header: 'Erreur',
        message: 'Une erreur est survenue lors de la création de la recette.',
        buttons: ['OK']
      });

      await alertError.present(); // Présenter l'alerte d'erreur
    }
  }

  goBack() {
    this.router.navigate(['/home']); 
  }
}
