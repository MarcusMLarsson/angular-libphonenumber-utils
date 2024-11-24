import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionCode } from 'google-libphonenumber';
import {
  countryDropdownOptions,
  validatorCodeSnippetHtml,
  validatorCodeSnippetTs,
  PhoneNumberService,
  phoneNumberValidator,
} from 'phone-utils';

@Component({
  selector: 'app-validator-demo',
  templateUrl: './validator-demo.component.html',
  styleUrls: ['./validator-demo.component.scss'],
})
export class ValidatorDemoComponent implements OnInit {
  phoneForm!: FormGroup;
  regionCode: RegionCode = 'SE';
  supportedRegions: RegionCode[] = [];
  readonly countryDropdownOptions = countryDropdownOptions;
  readonly validatorCodeSnippetHtml = validatorCodeSnippetHtml;
  readonly validatorCodeSnippetTs = validatorCodeSnippetTs;
  activeTab: 'demo' | 'ts' | 'html' = 'demo';

  constructor(
    private fb: FormBuilder,
    private phoneNumberService: PhoneNumberService
  ) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();

    this.phoneForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          phoneNumberValidator(this.phoneNumberService, this.regionCode),
        ],
      ],
      regionCode: ['SE'],
    });
  }

  onRegionChange(): void {
    const region = this.phoneForm.get('regionCode')?.value;
    this.regionCode = region;
    this.phoneForm.controls['phoneNumber'].setValidators([
      Validators.required,
      phoneNumberValidator(this.phoneNumberService, this.regionCode),
    ]);
    this.phoneForm.controls['phoneNumber'].updateValueAndValidity();
  }
}
