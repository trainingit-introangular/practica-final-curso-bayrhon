import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterprojectsComponent } from './projects/filterprojects/filterprojects.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { ProjectlistComponent } from './projects/projectlist/projectlist.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';


@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, ProjectlistComponent, FilterprojectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
