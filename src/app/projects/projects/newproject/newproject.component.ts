import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {

  //Propiedades
  public project: Project;
  public formGroup: FormGroup;

  //Constructor
  constructor(private ProjectsserviceService:ProjectsserviceService, private formBuilder:FormBuilder) { }

  //Inicializador
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const id = 0;
    const name = 'Project Name';
    this.formGroup = this.formBuilder.group({
      id: [id,[Validators.required, this.validateid]],
      name: [name, [Validators.required]],
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  //Función de validación propia
  private validateid(control: AbstractControl) {
    const id = control.value;
    let error = null;
    if (!parseFloat(id)) {
      error = { ...error, number: 'id must be a number' };
    }
    return error;
  }

  //Metodos
  public save() {
    const project = this.formGroup.value;
    this.ProjectsserviceService.saveProject(project);
  }

}
