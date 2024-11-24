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
      this.formatPhoneNumber();
    }
  }

  private formatPhoneNumber(): void {
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      const inputElement = this.el.nativeElement as HTMLInputElement;
      let rawInput = inputElement.value;
      let input = rawInput.replace(/[^\d+]/g, '');

      if (!input) return;

      const effectiveRegionCode =
        this.regionCode || this.phoneNumberService.getDefaultRegionCode();

      const formatter = new AsYouTypeFormatter(effectiveRegionCode);
      let formatted = '';

      formatter.clear();
      for (const char of input) {
        formatted = formatter.inputDigit(char);
      }

      inputElement.value = formatted;

      this.rawPhoneNumber = rawInput;
    }, 300);
  }

  ngOnInit(): void {
    this.formatPhoneNumber();
  }
}
