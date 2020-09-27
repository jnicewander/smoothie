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
  feedback: FeedbackRecords[] = [];
  projects: ProjectsRecords[] = [];
  modalView: boolean = false;
  categoryView: boolean = false;

  constructor(private details: DetailsService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.details.getDetails.subscribe(response => {
      this.startup = response;
    })
    this.details.setFeedbackDetails.subscribe((responseF: FeedbackResponse) => {
      if (responseF) {
        this.feedback = responseF.records;
        console.log(this.feedback);
      }
    })
    this.details.setProjectDetails.subscribe((responseP: ProjectsResponse) => {
      if (responseP) {
        this.projects = responseP.records;
        console.log(this.projects);
      }
      this.toggleModal();
    })
  }

  toggleModal() {
    this.modalView = !this.modalView;
  }

  toggleCategory() {
    this.categoryView = !this.categoryView;

    if (this.categoryView) {
      return 'active-cat';
    } else {
      return 'inactive-cat';
    }
  };

}
