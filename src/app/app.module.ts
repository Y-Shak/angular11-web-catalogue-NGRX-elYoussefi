import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { productReducer } from './ngrx/products.reducer';
import { ProductsEffects } from './ngrx/products.effects';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ catalogState: productReducer }),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


