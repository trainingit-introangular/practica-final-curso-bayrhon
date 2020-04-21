import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  //Propiedades
  public projects$: Observable<any> = null;

  //Constructor
  constructor(private ProjectsserviceService:ProjectsserviceService) { }

  //Inicializador
  ngOnInit(): void {
      this.projects$ = this.ProjectsserviceService.getProjects().pipe(share());
  }

  public onFilter(id: number) {
    this.projects$ = this.ProjectsserviceService.filtrarProjects(id);
  }

  public onDeleteFilter(deleteFilter: number) {
    if(deleteFilter === 1) {
      this.projects$ = this.ProjectsserviceService.deleteFilters();
    }
  }
}
