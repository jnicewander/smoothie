import { Component, OnInit } from '@angular/core';
import { ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'smoothie';
  data = [];
  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.api.getStartups().subscribe((res: any) => {
      this.data = res;
    })
  }
}
