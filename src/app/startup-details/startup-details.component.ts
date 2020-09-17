import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { ApiService } from '../services/api.service';
import { MasterListRecords } from '../interfaces/master-list-response';
import { FeedbackRecords, FeedbackResponse } from '../interfaces/feedback-response';
import { ProjectsRecords, ProjectsResponse } from '../interfaces/projects-response';

@Component({
  selector: 'app-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.css']
})
export class StartupDetailsComponent implements OnInit {
  startup: MasterListRecords;
  feedback: FeedbackRecords[];
  projects: ProjectsRecords[];

  constructor(private details: DetailsService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.details.getDetails.subscribe(response => {
      this.getFeedbackDetails('Feedback', response.fields["Company Name"]);
      this.getProjects('Projects', response.fields["Company Name"]);
      this.startup = response;
    })
  }
  
  getFeedbackDetails(route: string, startup: string): void {
    this.apiService.getDetails(route, startup).subscribe((response: FeedbackResponse) => {
      this.feedback = response.records;
    })
  }
  
  getProjects(route: string, startup: string): void {
    this.apiService.getDetails(route, startup).subscribe((response: ProjectsResponse) => {
      this.projects = response.records;
      this.mergeDetails();
    })
  }

  mergeDetails(): void {
    if(this.feedback) {
      this.feedback.forEach((record) => {
        this.startup[record.fields["Your Organization"].toLowerCase() + ' feedback'] = record;
    })
    if(this.projects) {
        this.startup['projects'] = this.projects;
    }
    console.log(this.startup);
    }
  }
}
