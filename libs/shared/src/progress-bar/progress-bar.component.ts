import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {

  @Input() category: string;
  @Input() value: number = 50;

  description: string = 'Good';

  constructor() { }

  ngOnChanges(changes) {
    if (changes.value) {
      if (this.value === 100) {
        this.description = 'Expert';
      } else if (this.value >= 80) {
        this.description = 'Very Good';
      } else if (this.value >= 60) {
        this.description = 'Intermediate';
      } else if (this.value >= 40) {
        this.description = 'Good';
      } else if (this.value < 40) {
        this.description = 'Basic';
      }
    }
  }

}