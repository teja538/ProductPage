import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayitComponent } from './playit/playit.component';
import { ProductComponent } from './product/product.component';
import { CatComponent } from './cat/cat.component';
import { NavComponent } from './nav/nav.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { MainComponent } from './main/main.component';
import { DupComponent } from './dup/dup.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayitComponent,
    ProductComponent,
    CatComponent,
    NavComponent,
    ProDetailsComponent,
    MainComponent,
    DupComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
