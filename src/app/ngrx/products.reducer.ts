import { Product } from "../model/product.model";
import { ProductsActions, ProductsActionsTypes } from "../ngrx/products.actions";
import { Action } from "@ngrx/store";
export interface ProductsState {
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

const initState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL
}

export function productReducer(
    state: ProductsState = initState,
    action: Action): ProductsState {

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