import { Injectable } from '@angular/core';
import { PredictionAPIClient } from '@azure/cognitiveservices-customvision-prediction';

@Injectable({
  providedIn: 'root'
})
export class ComputerVisionService {
  predictionName: string;
  predictionId: string;
  predictor: PredictionAPIClient;

  constructor(predictionKey: string, endpoint: string, id: string, name: string) {
    this.predictionName = name;
    this.predictionId = id;
    this.predictor = new PredictionAPIClient(predictionKey, endpoint);
  }

  predict(imageUrl: string) {
    //this.predictor.detectImageUrl(this.predictionId, this.predictionName, imageUrl);
  }
}