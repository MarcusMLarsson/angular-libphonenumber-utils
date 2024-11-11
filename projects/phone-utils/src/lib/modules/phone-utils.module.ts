import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberPipe } from '../pipes/phone-format.pipe';
import { PhoneNumberDirective } from '../directives/phone-format.directive';
import { PhoneNumberService } from '../services/phone-number.service';

@NgModule({
  declarations: [PhoneNumberPipe, PhoneNumberDirective],
  imports: [CommonModule],
  exports: [PhoneNumberPipe, PhoneNumberDirective],
  providers: [PhoneNumberService],
})
export class PhoneUtilsModule {}
