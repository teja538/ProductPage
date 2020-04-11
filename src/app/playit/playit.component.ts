import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-playit',
  templateUrl: './playit.component.html',
  styleUrls: ['./playit.component.css']
})
export class PlayitComponent implements OnInit {

 // public aud;
  public audio;
  
  // c1: boolean = true;
  // c2: boolean = true;
 // audioPlayer = <HTMLMediaElement>document.getElementById("h_a");



  constructor() { }

  ngOnInit() {
  }

  // src="../../assets/high_a.mp3"

 

c2=document.getElementById("c1");
 func1()
   {
    document.getElementById("c1");
    // if(this.c1){
    // var aud=new Audio("../../assets/high_a.mp3");
    // var x=document.getElementById("h_a");
    // var audio = document.getElementById("audio");
    // return this.audio.x.play();
    this.audio=new Audio();
    this.audio.src="../../assets/high_a.mp3";
    this.audio.play();
    //}
  }
   

   
 func2()
 { 
  
   this.audio=new Audio();
   this.audio.src="../../assets/high_b.mp3";
   this.audio.play();
  
 }








}
