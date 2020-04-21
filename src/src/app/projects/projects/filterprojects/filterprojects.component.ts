import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filterprojects',
  templateUrl: './filterprojects.component.html',
  styles: []
})
export class FilterprojectsComponent implements OnInit {
  //Propiedades
  public id = 0;
  public name ='';
  @Output() public filter = new EventEmitter<number>();
  @Output() public deleteFilter = new EventEmitter<number>();

  //Construnctor
  constructor() { }

  //Inicializador
  ngOnInit(): void {

  }
}
