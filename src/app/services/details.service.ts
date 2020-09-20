import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from './api.service';
import { FeedbackResponse } from '../interfaces/feedback-response';
import { ProjectsResponse } from '../interfaces/projects-response';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  getDetails = new EventEmitter();
  setFeedbackDetails = new EventEmitter();
  setProjectDetails = new EventEmitter();

  constructor(private apiService: ApiService) {
    this.getDetails.subscribe((response) => {
      this.apiService.getDetails('Feedback', response.fields["Company Name"]).subscribe((responseF: FeedbackResponse) => {
        this.setFeedbackDetails.emit(responseF);
      }) 
      this.apiService.getDetails('Projects', response.fields["Company Name"]).subscribe((responseP: ProjectsResponse) => {
        this.setProjectDetails.emit(responseP);
      })  
    })
  }
  

}