import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { MsgInterceptorService } from './msg-interceptor.service';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsgInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
