import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayitComponent } from './playit/playit.component';

import { ProductComponent } from './product/product.component';
import { CatComponent } from './cat/cat.component';
import { NavComponent } from './nav/nav.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { DupComponent } from './dup/dup.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [

  {path:'proDetails',component:ProDetailsComponent},
  {path:'nav',component:NavComponent},
  {path:'cat',component:CatComponent},
  {path:'product',component:ProductComponent},
  {path:'main',component:MainComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
