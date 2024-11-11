import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberFormat } from 'google-libphonenumber';
import { PhoneNumberService } from '../services/phone-number.service';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  constructor(private phoneNumberService: PhoneNumberService) {}

  /**
   * @summary Formats a phone number for display in a specified format.
   * @description This pipe formats a given phone number into either national or international format,
   *              using google-libphonenumber for accurate locale-specific formatting.
   *
   * @param phoneValue - The phone number to format, provided as a number or string.
   * @param format - The desired format: `'national'` for the local number format,
   *                 or `'international'` for the format with a country code prefix.
   *                 Defaults to `'national'`.
   * @returns The phone number formatted according to the specified format.
   *
   * @example
   * ```typescript
   * {{ userPhoneNumber | phoneNumber:'international' }}
   * ```
   */
  transform(
    phoneValue: number | string,
    format: 'national' | 'international' = 'national'
  ): any {
    try {
      const phoneNumber = this.phoneNumberService.parsePhoneNumber(
        phoneValue.toString()
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
