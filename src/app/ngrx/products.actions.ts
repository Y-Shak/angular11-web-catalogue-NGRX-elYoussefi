export enum ProductsActionsTypes {
    GET_ALL_PRODUCTS = " [Product] Get all products ",
    GET_ALL_PRODUCTS_SUCCESS = " [Product] Get all products success",
    GET_ALL_PRODUCTS_ERROR = " [Product] Get all products error",

    GET_SELECTED_PRODUCTS = " [Product] Get selected products ",
    GET_SELECTED_PRODUCTS_SUCCESS = " [Product] Get selected products success",
    GET_SELECTED_PRODUCTS_ERROR = " [Product] Get selected products error",

    GET_AVAILABLE_PRODUCTS = " [Product] Get available products ",
    GET_AVAILABLE_PRODUCTS_SUCCESS = " [Product] Get available products success",
    GET_AVAILABLE_PRODUCTS_ERROR = " [Product] Get available products error"
}

import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

/* Get all products part */
export class GetAllProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public playload: any) { }
}
export class GetAllProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public playload: Product[]) { }
}
export class GetAllProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public playload: string) { }
}
/* Get selected products part */
export class GetSelectedProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public playload: any) { }
}
export class GetSelectedProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public playload: Product[]) { }
}
export class GetSelectedProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public playload: string) { }
}
/* Get available products part */
export class GetAvailableProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;
    constructor(public playload: any) { }
}
export class GetAvailableProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
    constructor(public playload: Product[]) { }
}
export class GetAvailableProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
    constructor(public playload: string) { }
}

export type ProductsActions =
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
    | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
    | GetAvailableProductsAction | GetAvailableProductsActionSuccess | GetAvailableProductsActionError
    ;