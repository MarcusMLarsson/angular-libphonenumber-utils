import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionCode } from 'google-libphonenumber';
import { PhoneNumberService, phoneNumberValidator } from 'phone-utils';
import { countryDropdownOptions } from 'phone-utils';

@Component({
  selector: 'app-validator-demo',
  templateUrl: './validator-demo.component.html',
  styleUrls: ['./validator-demo.component.scss'],
})
export class ValidatorDemoComponent implements OnInit {
  phoneForm!: FormGroup;
  regionCode!: RegionCode;
  supportedRegions: RegionCode[] = [];
  countryDropdownOptions = countryDropdownOptions;

  constructor(
    private fb: FormBuilder,
    private phoneNumberService: PhoneNumberService
  ) {}

  ngOnInit(): void {
    // Fetch supported regions (adjust this to match how you get the supported regions)
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();

    // Initialize the form
    this.phoneForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          phoneNumberValidator(this.phoneNumberService, this.regionCode),
        ],
      ],
      regionCode: ['US'],
    });
  }

  // Dynamically set region code and update the validator
  onRegionChange(): void {
    const region = this.phoneForm.get('regionCode')?.value;
    this.regionCode = region;
    console.log(this.regionCode);
    // Update the validator when the region code is changed
    this.phoneForm.controls['phoneNumber'].setValidators([
      Validators.required,
      phoneNumberValidator(this.phoneNumberService, this.regionCode),
    ]);
    this.phoneForm.controls['phoneNumber'].updateValueAndValidity();
  }
}
