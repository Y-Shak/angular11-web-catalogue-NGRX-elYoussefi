import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetAvailableProductsActionError, GetAvailableProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductsActionsTypes } from "../ngrx/products.actions";
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService) {

    }

    getAllProductsEffect$: Observable<Action> = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
                mergeMap(() => {
                    return this.productService.getProducts()
                        .pipe(
                            map((products) => new GetAllProductsActionSuccess(products)),
                            catchError((err) => of(new GetAllProductsActionError(err.message)))
                        )
                })
            )
    );
    getSelectedProductsEffect$: Observable<Action> = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
                mergeMap(() => {
                    return this.productService.getSelectedProducts()
                        .pipe(
                            map((products) => new GetSelectedProductsActionSuccess(products)),
                            catchError((err) => of(new GetSelectedProductsActionError(err.message)))
                        )
                })
            )
    );
    getAvailableProductsEffect$: Observable<Action> = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
                mergeMap(() => {
                    return this.productService.getAvailableProducts()
                        .pipe(
                            map((products) => new GetAvailableProductsActionSuccess(products)),
                            catchError((err) => of(new GetAvailableProductsActionError(err.message)))
                        )
                })
            )
    );

}