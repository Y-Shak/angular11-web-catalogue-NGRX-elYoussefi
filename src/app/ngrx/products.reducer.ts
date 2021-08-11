import { Product } from "../model/product.model";
import { ProductsActions, ProductsActionsTypes } from "../ngrx/products.actions";
import { Action } from "@ngrx/store";
export interface productsState {
    products: Product[],
    errorMessage: string,
    dataState: ProductsStateEnum
}

export enum ProductsStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

const initState: productsState = {
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL
}

export function productReducer(
    state: productsState = initState,
    action: Action): productsState {

    switch (action.type) {
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING }; break;
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).playload }; break;
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).playload }; break;
        /* get selected products part  */
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING }; break;
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).playload }; break;
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).playload }; break;
        /* get available products part  */
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING }; break;
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).playload }; break;
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).playload }; break;
        default: return { ...state }
    }
}