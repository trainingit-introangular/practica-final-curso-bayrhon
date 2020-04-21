import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styles: []
})
export class ProjectlistComponent implements OnInit {

  @Input() public projects: any;
  constructor() { }

  ngOnInit(): void {
  }

}
