import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NaviComponent } from './navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';  
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from 'ngx-toastr';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductAddComponent } from './product-add/product-add.component';

 @NgModule({
  declarations: [
  AppComponent,
  CategoryComponent,
   ProductComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
