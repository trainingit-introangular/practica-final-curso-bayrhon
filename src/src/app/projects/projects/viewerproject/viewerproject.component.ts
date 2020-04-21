import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public project$: Observable<any[]>;
  public projectId: number;

  public id

  public projects = environment.projects;


  constructor(activateRoute: ActivatedRoute, private ProjectsserviceService:ProjectsserviceService) {
    this.projectId = activateRoute.snapshot.params['id'];
 }

  ngOnInit(): void {
      this.project$ = this.ProjectsserviceService.getDetailProject(this.projectId);
  }

}
