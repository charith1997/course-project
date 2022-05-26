import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
