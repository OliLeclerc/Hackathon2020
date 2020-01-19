import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { DrawService } from './draw.service';
import {ComputerVisionService} from "./computer-vision.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title of the app
  title = 'hackathon';
  //Constructor to initialize the prediction component
  constructor(private computerVision: ComputerVisionService) {}
  // latest snapshot took by the webcam
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private w;

  public record(): void {
    if(typeof(Worker) !== "undefined") {
      if(typeof(this.w) == "undefined") {
        this.w = new Worker("app.worker.js");
      }
      this.w.onmessage = function(event) {
        this.triggerSnapshot();
      };
    } else {
      console.log("Sorry, your browser does not support Web Workers...");
    }
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.createImg(this.webcamImage);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image');
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  async createImg(webcamImage: WebcamImage) {
    let blob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
    let yeet = await this.computerVision.predict(blob);
    console.log(yeet);
  }

  dataURItoBlob(dataURI) {
    let byteString = atob(dataURI.split(',')[1]);
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], {type: mimeString});
    return blob;
  }
}