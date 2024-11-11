import { Directive, ElementRef, HostListener } from '@angular/core';
import { AsYouTypeFormatter } from 'google-libphonenumber';
import { PhoneNumberService } from '../services/phone-number.service';

@Directive({
  selector: '[czPhoneNumberDirective]',
})
export class PhoneNumberDirective {
  private debounceTimeout: any;

  constructor(
    private el: ElementRef,
    private phoneNumberService: PhoneNumberService
  ) {}

  /**
   * @summary Formats phone number input dynamically as the user types.
   * @description This method listens to the `input` event on an attached input field and
   *              applies locale-specific phone number formatting using google-libphonenumber's
   *              `AsYouTypeFormatter`.
   *
   * @hostListener input - Attaches to the `input` event to trigger formatting on each change.
   *
   * @example
   * ```html
   * <input type="text" formControlName="phone" czPhoneNumberDirective />
   * ```
   */
  @HostListener('input', ['$event'])
  onInput(): void {
    clearTimeout(this.debounceTimeout);

    const inputElement = this.el.nativeElement as HTMLInputElement;
    const input = inputElement.value;
    const countryCode = this.phoneNumberService.getCountryCode();

    this.debounceTimeout = setTimeout(() => {
      const formatter = new AsYouTypeFormatter(countryCode);
      let formatted = '';

      formatter.clear();
      for (const char of input.replace(/\s/g, '')) {
        formatted = formatter.inputDigit(char);
      }

      inputElement.value = formatted;
    }, 300);
  }
}
