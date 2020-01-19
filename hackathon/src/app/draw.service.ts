import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  constructor() { }

  draw(json:JSON[]){
    let svg = document.getElementById('svgContainer');
    console.log(svg);
    let svgElem = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.appendChild(svgElem);

    /*let coordinates = [];
    for (let i=0; i<this.json["Objects"].length; i++){
      if (this.json["Objects"][i]["confidence"] >= 80){
        coordinates.push(this.json["Objects"][i]["rectangle"]["x"]);
        coordinates.push(this.json["Objects"][i]["rectangle"]["y"]);
        coordinates.push(this.json["Objects"][i]["rectangle"]["w"]);
        coordinates.push(this.json["Objects"][i]["rectangle"]["h"]);
      }
        
    }*/
  }

}