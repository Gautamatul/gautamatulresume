import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.scss']
})
export class BodyHeaderComponent implements OnInit {

  joiningDate = '2017-12-06';
  totalYears: number;
  totalMonths: number;

  constructor() { }

  ngOnInit() {
    this.totalYears = moment().diff(moment(this.joiningDate).subtract(1, 'months'), 'years');
    this.totalMonths = (moment().diff(moment(this.joiningDate).subtract(1, 'months'), 'months') % 12);
    console.log(this.totalYears);
    console.log(this.totalMonths);
  }

}