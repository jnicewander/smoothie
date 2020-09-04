import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css']
})
export class ThemeCardComponent implements OnInit {
  titles: string[] = ['The Good Life', 'Health Beyond the Hospital', 'Robust Future'];
  classList: string[] = ['good-life', 'health', 'future']

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(index): string {
    return this.classList[index];
  }


}
