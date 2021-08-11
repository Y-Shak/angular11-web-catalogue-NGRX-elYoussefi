import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsState$!: Observable<ProductsState>;
  readonly ProductsStateEnum = ProductsStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
