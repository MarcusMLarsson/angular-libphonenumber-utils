import { Component } from '@angular/core';
import {
  countryDropdownOptions,
  directiveCodeSnippetHtml,
  directiveCodeSnippetTs,
  PhoneNumberService,
} from 'phone-utils';
import { RegionCode } from 'google-libphonenumber';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss'],
})
export class DirectiveDemoComponent {
  phoneNumber = '0705359321';
  supportedRegions: string[] = [];
  regionCode: RegionCode = 'SE';
  activeTab: 'demo' | 'ts' | 'html' = 'demo';
  readonly countryDropdownOptions = countryDropdownOptions;
  readonly directiveCodeSnippetHtml = directiveCodeSnippetHtml;
  readonly directiveCodeSnippetTs = directiveCodeSnippetTs;

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }
}
