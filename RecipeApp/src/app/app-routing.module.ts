// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'recipe-create', loadChildren: () => import('./pages/recipe-create/recipe-create.module').then(m => m.RecipeCreatePageModule) },
  { path: 'recipe-detail/:id', loadChildren: () => import('./pages/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule) },
  { path: 'recipe-edit/:id', loadChildren: () => import('./pages/recipe-edit/recipe-edit.module').then(m => m.RecipeEditPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
