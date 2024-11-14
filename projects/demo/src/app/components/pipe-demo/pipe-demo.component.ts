import { Component } from '@angular/core';
import { PhoneNumberService } from 'phone-utils';
import { countryDropdownOptions } from 'phone-utils';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss'],
})
export class PipeDemoComponent {
  phoneNumber = '0703359321';
  supportedRegions: string[] = [];
  selectedRegion = this.phoneNumberService.getCountryCode();
  countryDropdownOptions = countryDropdownOptions;

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }

  updateFormattedPhoneNumber(): void {
    this.phoneNumberService.setLocale(this.selectedRegion);
  }
}
