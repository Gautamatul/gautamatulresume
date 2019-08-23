import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'technologies-used',
  templateUrl: './technologies-used.component.html',
  styleUrls: ['./technologies-used.component.scss']
})
export class TechnologiesUsedComponent implements OnInit {

  @Input() technologies: string[]

  constructor() { }

  ngOnInit() {
  }

}