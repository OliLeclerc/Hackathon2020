import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-image',
  templateUrl: './output-image.component.html',
  styleUrls: ['./output-image.component.css']
})

export class OutputImageComponent implements OnInit {
  @ViewChild('imageContainer') dataContainer:ElementRef;

  constructor() {
   }

  ngOnInit() {
  }

  onImageReception(){
    let recyclingClassification = "PE part";
  }
}
