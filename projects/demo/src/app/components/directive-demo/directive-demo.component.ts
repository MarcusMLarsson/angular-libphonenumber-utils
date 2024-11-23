import { Component } from '@angular/core';
import { PhoneNumberService } from 'phone-utils';
import { countryDropdownOptions } from 'phone-utils';
import { RegionCode } from 'google-libphonenumber';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss'],
})
export class DirectiveDemoComponent {
  phoneNumber = '0703359321';
  supportedRegions: string[] = [];
  regionCode!: RegionCode;
  activeTab: 'demo' | 'ts' | 'html' = 'demo';
  countryDropdownOptions = countryDropdownOptions;

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }
}
