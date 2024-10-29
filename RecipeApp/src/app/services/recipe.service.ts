import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Recipe {
  id?: string; // Optional id field, populated by Firestore
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private firestore: AngularFirestore) {}

  // Fetch all recipes with an added id field
  getRecipes(): Observable<Recipe[]> {
    return this.firestore.collection<Recipe>('recipes').valueChanges({ idField: 'id' });
  }

  // Fetch a single recipe by its ID
  getRecipeById(recipeId: string): Observable<Recipe | undefined> {
    return this.firestore.collection<Recipe>('recipes').doc<Recipe>(recipeId).valueChanges();
  }

  // Create a new recipe
  createRecipe(recipe: Recipe): Promise<void> {
    const id = this.firestore.createId(); // Generate a unique ID for the recipe
    return this.firestore.collection('recipes').doc(id).set({ ...recipe, id });
  }

  // Update a recipe by its ID
  updateRecipe(recipeId: string, recipe: Recipe): Promise<void> {
    return this.firestore.collection('recipes').doc(recipeId).update(recipe)
      .catch(error => {
        console.error('Error updating recipe:', error);
        throw error; // Rethrow the error after logging it
      });
  }

  // Delete a recipe by its ID
  deleteRecipe(recipeId: string): Promise<void> {
    return this.firestore.collection('recipes').doc(recipeId).delete()
      .catch(error => {
        console.error('Error deleting recipe:', error);
        throw error; // Rethrow the error after logging it
      });
  }
}
