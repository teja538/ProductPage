import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare const gal:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hi(){
    gal();
  }

  // back(){
  // this.router.navigate(['/link']);
  // }


}
