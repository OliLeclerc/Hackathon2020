import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDecoratorService {

  constructor() { }

  drawRectangles(src:string, json:string):string{
      let svgtop = "<svg width='200' height='200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>";
      let image = "<image href=" + src + "height='200' width='200'>";
  }
}
