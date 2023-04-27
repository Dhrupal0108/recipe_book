import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef : ElementRef;
  @ViewChild('amountInput') amountRef :ElementRef;

constructor(private shoppingListService : ShoppingListService){}

  onAddItem(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngridient = new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngridient);
  }
}
