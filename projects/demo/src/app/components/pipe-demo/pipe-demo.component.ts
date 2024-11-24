import { Component } from '@angular/core';
import {
  PhoneNumberService,
  countryDropdownOptions,
  pipeCodeSnippetHtml,
  pipeCodeSnippetTs,
} from 'phone-utils';
import { RegionCode } from 'google-libphonenumber';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss'],
})
export class PipeDemoComponent {
  phoneNumber = '0705359321';
  supportedRegions: RegionCode[] = [];
  regionCode: RegionCode = 'SE';
  countryDropdownOptions = countryDropdownOptions;
  readonly pipeCodeSnippetHtml = pipeCodeSnippetHtml;
  readonly pipeCodeSnippetTs = pipeCodeSnippetTs;
  activeTab: 'demo' | 'ts' | 'html' = 'demo';

  constructor(private phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this.supportedRegions = this.phoneNumberService.getSupportedRegions();
  }
}
