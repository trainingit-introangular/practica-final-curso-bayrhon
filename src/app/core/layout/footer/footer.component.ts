import { Component, OnInit } from '@angular/core';
import { MsgStoreService } from '../../msg-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  public msg = '';

  constructor(private msgStore:MsgStoreService) {
    this.msgStore.select$().subscribe(msg => (this.msg = msg));
  }

  ngOnInit(): void {
  }
}
