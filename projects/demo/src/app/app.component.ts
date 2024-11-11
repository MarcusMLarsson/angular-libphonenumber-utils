import { Component } from '@angular/core';
import { PhoneNumberService } from 'phone-utils';

@Component({
  selector: 'app-phone-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  phoneNumber = '1234567890';
  supportedRegions: string[] = [];
  selectedRegion = '';
  formattedPhoneNumber: string = '';

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }

  updateFormattedPhoneNumber(): void {
    this.phoneNumberService.setLocale(this.selectedRegion);
  }
}
