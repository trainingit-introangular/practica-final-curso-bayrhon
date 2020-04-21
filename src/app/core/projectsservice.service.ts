import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Project } from '../projects/projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsserviceService {
  //Propiedades
  public project: Project;
  private idBuscar: number = null;
  private showNumProjects: boolean = false;

  // - array en local public projects = environment.projects;
  public projects$: Observable<any>;
  public numprojects = 0;

  private projectsFilter: any[];
  //Propiedades HttpClient
  private myProjectsApi = 'https://api-base.herokuapp.com/api/pub/projects'

  //Contructor
  constructor(private httpClient: HttpClient) { }

  //Metodos de proyectos
  // public saveProject(project: any) {
  //   array en local this.projects.push({ ...project });
  //   this.numprojects = this.getNumberOfProjects();
  // }
  public getProjects(){
    this.projects$ = this.httpClient.get(this.myProjectsApi).pipe(share());
    return this.projects$;
  }

  public saveProject(project: any) {
      this.httpClient
        .post(this.myProjectsApi, project)
        .subscribe()
  }

  public filtrarProjects (id: number){
    this.idBuscar = id;
    return this.projects$.pipe(
      map(this.mapeo, this)
    );
  }

  public mapeo(arrayProjects) {
    if(this.idBuscar == null && this.showNumProjects == true){
      return arrayProjects.length;
    }
    else {
      return arrayProjects.filter(proj => proj.id == this.idBuscar);
    }
  }

  public deleteFilters(){
    return this.projects$;
  }

  public getNumberOfProjects(){
    this.projects$ = this.getProjects();
    this.showNumProjects = true;
    return this.projects$.pipe(
      map(this.mapeo, this)
    );
  }

  public getDetailProject(id: number){
    this.projects$ = this.getProjects();
    this.idBuscar = id;
    return this.projects$.pipe(
      map(this.mapeo, this)
    );
  }

}
