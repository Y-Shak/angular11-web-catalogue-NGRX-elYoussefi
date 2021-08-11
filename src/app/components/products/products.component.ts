import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { Store } from "@ngrx/store";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsState$!: Observable<ProductsState>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.productsState$ = this.store.pipe(
      map((state) => state.catalogState)
    );

  }


}


