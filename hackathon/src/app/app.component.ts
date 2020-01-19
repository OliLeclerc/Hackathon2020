import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError} from 'ngx-webcam';
import {ComputerVisionService} from "./computer-vision.service";
import {HttpRequest} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon';
  public showWebcam = true;
  public allowCameraSwitch = true;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  constructor(private computerVision: ComputerVisionService) {}

  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  //Web Worker
  //public webWorker = new Worker("app.worker.ts")

  // list of png
  public imageList : Array<HTMLImageElement> = [] ;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  createImg(webcamImage: WebcamImage) {
    let img: HTMLImageElement = new Image();
    img.src = webcamImage.imageAsBase64;
    this.imageList.push(img);
    let canvas = document.createElement('canvas');
    canvas.height = webcamImage.imageData.height;
    canvas.width = webcamImage.imageData.width;
    canvas.getContext('2d').drawImage(img, 0, 0);
    let img2 = document.createElement('img');
    img2.src = canvas.toDataURL();

    let yeet = this.computerVision.predict(img2.src);
    console.log(yeet);
  }
}
