import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MsgStoreService } from './msg-store.service';

@Injectable()
export class MsgInterceptorService {

  constructor(private msgStore:MsgStoreService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
                this.msgStore.dispatch('Status: ' + event.status + ', statusText: ' + event.statusText + ', Url: ' + event.url);
            }
            return event;
        })
      );
  }
}
