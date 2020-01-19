import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  constructor() { }

  draw(json:JSON[]){
    let svg = document.getElementById('svgContainer');
    console.log(svg);
    var svgElem = document.createTextNode("Hi there and greetings!"); 
    svg.appendChild(svgElem);

    let coordinates = [];
    
  }

}