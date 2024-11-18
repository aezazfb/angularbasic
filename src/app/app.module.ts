import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { InjectionToken } from '@angular/core';

export const ToastConfig = new InjectionToken('ToastConfig', {
  providedIn: 'root',
  factory: () => ({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    closeButton: true
  })
});

@NgModule({
  imports: [CommonModule, ToastrModule.forRoot({
    timeOut: 60000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeButton: true
  })],
  providers: [
    {
      provide: ToastConfig,
      useValue: {
        timeOut: 5000,
        positionClass: 'toast-top-center',
        closeButton: false
      }
    }
  ],
})
export class AppModule {}
