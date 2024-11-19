import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
} from '@angular/core';
import { AsYouTypeFormatter, RegionCode } from 'google-libphonenumber';
import { PhoneNumberService } from '../services/phone-number.service';

@Directive({
  selector: '[czPhoneNumberDirective]',
})
export class PhoneNumberDirective implements OnChanges, OnInit {
  private debounceTimeout: any;
  @Input() regionCode?: RegionCode;
  rawPhoneNumber!: string;

  constructor(
    private el: ElementRef,
    private phoneNumberService: PhoneNumberService
  ) {}

  @HostListener('input', ['$event'])
  onInput(): void {
    this.formatPhoneNumber();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['regionCode']) {
      // Ensure we reformat the existing input when region changes
      this.formatPhoneNumber();
    }
  }

  private formatPhoneNumber(): void {
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      const inputElement = this.el.nativeElement as HTMLInputElement;
      let rawInput = inputElement.value; // This is the original input, including all special characters like '+', spaces, etc.

      // Clean the raw input for formatting (remove non-digit characters except '+')
      let input = rawInput.replace(/[^\d+]/g, ''); // This removes everything except digits and '+'

      if (!input) return; // Exit if there's no input

      const effectiveRegionCode =
        this.regionCode || this.phoneNumberService.getDefaultRegionCode();

      const formatter = new AsYouTypeFormatter(effectiveRegionCode);
      let formatted = '';

      formatter.clear();
      for (const char of input) {
        formatted = formatter.inputDigit(char);
      }

      // Now, update the input element with the formatted value
      inputElement.value = formatted;

      // Optionally, you can store rawInput (the unmodified input) somewhere else for validation or processing.
      // For example:
      this.rawPhoneNumber = rawInput; // Store raw input for further use if necessary
    }, 300);
  }

  ngOnInit(): void {
    this.formatPhoneNumber();
  }
}
