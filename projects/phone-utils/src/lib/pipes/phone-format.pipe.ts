import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberFormat, RegionCode } from 'google-libphonenumber';
import { PhoneNumberService } from '../services/phone-number.service';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  constructor(private phoneNumberService: PhoneNumberService) {}

  /**
   * @summary Formats a phone number for display in a specified format and locale.
   *
   * @param phoneValue - The phone number to format, provided as a number or string.
   * @param format - The desired format: `'national'`, `'international'`, `'e164'`, or `'rfc3966'`.
   *                 Defaults to `'national'`.
   * @param locale - The locale to use for formatting (e.g., 'en-US', 'fr-FR').
   * @returns The phone number formatted according to the specified format and locale.
   *
   * @example
   * ```typescript
   * {{ userPhoneNumber | phoneNumber:'international':'en-US' }}
   * ```
   */
  transform(
    phoneValue: number | string,
    format: 'national' | 'international' | 'e164' | 'rfc3966' = 'national',
    regionCode?: RegionCode
  ): any {
    try {
      const effectiveRegionCode =
        regionCode ?? this.phoneNumberService.getDefaultRegionCode();

      const phoneNumber = this.phoneNumberService.parsePhoneNumber(
        phoneValue.toString(),
        effectiveRegionCode
      );
      switch (format) {
        case 'national':
          return this.phoneNumberService.formatPhoneNumber(
            phoneNumber,
            PhoneNumberFormat.NATIONAL
          );
        case 'international':
          return this.phoneNumberService.formatPhoneNumber(
            phoneNumber,
            PhoneNumberFormat.INTERNATIONAL
          );
        case 'e164':
          return this.phoneNumberService.formatPhoneNumber(
            phoneNumber,
            PhoneNumberFormat.E164
          );
        case 'rfc3966':
          return this.phoneNumberService.formatPhoneNumber(
            phoneNumber,
            PhoneNumberFormat.RFC3966
          );
        default:
          return this.phoneNumberService.formatPhoneNumber(
            phoneNumber,
            PhoneNumberFormat.NATIONAL
          );
      }
    } catch (error) {
      if (phoneValue === null || (<string>phoneValue).trim() === '') return '';
      console.warn('Error parsing phone number:', error);
      const cleanedPhoneValue = phoneValue
        .toString()
        .trim()
        .replace(/[^0-9]/g, '');
      return cleanedPhoneValue;
    }
  }
}
