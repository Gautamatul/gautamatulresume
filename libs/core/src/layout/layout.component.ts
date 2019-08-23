import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ContentChild('sideTemplate') sideTemplate: TemplateRef<ElementRef>;
  @ContentChild('contentTemplate') contentTemplate: TemplateRef<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

}