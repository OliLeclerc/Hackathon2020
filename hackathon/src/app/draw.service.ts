import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  constructor(private http: HttpClient) { }

  items = [];

  draw(item){
    this.items.push(item);
    //
  }

  clear(item){
    this.items.pop();
    //
  }

  getCoordinates(){
    return this.http.get('/*...json link...');
  }

}

class Item {
  type:string;
  coordinates:number[];
  constructor(type:string, coordinates:number[]) {
    this.type = type;
    this.coordinates = coordinates;
  }
}