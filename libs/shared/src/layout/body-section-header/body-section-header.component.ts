import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'body-section-header',
  templateUrl: './body-section-header.component.html',
  styleUrls: ['./body-section-header.component.scss']
})
export class BodySectionHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}