import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  constructor() { }

  draw(predictions:Object[]){

    let svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute('width', '650');
    svgElem.setAttribute('height', '500');
    let svgNS = svgElem.namespaceURI;

    for (let i=0; i<predictions.length; i++){
      let w = 650 * predictions[i]["boundingBox"]["width"] as unknown;
      let x = 650 * (1 - predictions[i]["boundingBox"]["left"] - predictions[i]["boundingBox"]["width"]) as unknown;
      let y = 500 * predictions[i]["boundingBox"]["top"] as unknown;
      let h = 500 * predictions[i]["boundingBox"]["height"] as unknown;
      let tag = predictions[i]["tagName"] as unknown;

      let s1 = x as string;
      let s2 = y as string;
      let s3 = w as string;
      let s4 = h as string;

      if (predictions[i]["probability"] >= 0.70){
        let rect = document.createElementNS(svgNS,'rect');
        rect.setAttribute('x', s1);
        rect.setAttribute('y', s2);
        rect.setAttribute('width', s3);
        rect.setAttribute('height', s4);
        rect.setAttribute('fill','transparent');
        rect.setAttribute('stroke','black');
        rect.setAttribute('stroke-width', '4px');

        console.log(tag)
        if(tag == "bouteille")
          rect.setAttribute('stroke', 'purple');
        else if (tag == "cannette")
          rect.setAttribute('stroke', 'blue');
        else if (tag == "chips")
          rect.setAttribute('stroke', 'red');

        svgElem.appendChild(rect);
      }

    }

    let svg = document.getElementById('svgContainer');
    while(svg.firstChild){
      svg.removeChild(svg.firstChild);
    }
    console.log(svg);
    svg.appendChild(svgElem);

  }

}
