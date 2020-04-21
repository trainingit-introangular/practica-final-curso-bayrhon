import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private ProjectsserviceService:ProjectsserviceService) { }
  public numProjects$: Observable<any>;

  ngOnInit(): void {
    this.numProjects$ = this.ProjectsserviceService.getNumberOfProjects();
  }

}
