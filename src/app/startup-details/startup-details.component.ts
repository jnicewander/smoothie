import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { MasterListRecords } from '../interfaces/master-list-response';

@Component({
  selector: 'app-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.css']
})
export class StartupDetailsComponent implements OnInit {
  startup: MasterListRecords;
  constructor(private details: DetailsService) { }

  ngOnInit(): void {
    this.details.getDetails.subscribe(startupObj => {
      this.startup = startupObj;
      console.log(this.startup);
    })
  }

}
