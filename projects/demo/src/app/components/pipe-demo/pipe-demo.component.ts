import { Component } from '@angular/core';
import { PhoneNumberService } from 'phone-utils';
import { countryDropdownOptions } from 'phone-utils';
import { RegionCode } from 'google-libphonenumber';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss'],
})
export class PipeDemoComponent {
  phoneNumber = '0703359321';
  supportedRegions: RegionCode[] = [];
  regionCode!: RegionCode;
  countryDropdownOptions = countryDropdownOptions;

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }
}
