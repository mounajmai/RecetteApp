import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeEditPage } from './recipe-edit.page';
import { RecipeEditPageRoutingModule } from './recipe-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeEditPageRoutingModule
  ],
  declarations: [RecipeEditPage]
})
export class RecipeEditPageModule {}
