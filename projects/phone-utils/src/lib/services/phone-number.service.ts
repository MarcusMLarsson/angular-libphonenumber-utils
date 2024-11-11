import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import {
  PhoneNumberUtil,
  PhoneNumber,
  PhoneNumberFormat,
  RegionCode,
} from 'google-libphonenumber';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  private phoneUtil = PhoneNumberUtil.getInstance();

  // Maps Angular's LOCALE_ID values (BCP 47 language tags) to ISO 3166-1 alpha-2 country codes,
  // allowing compatibility with google-libphonenumber for region-specific formatting and validation.
  private readonly localeToCountryCode: { [key: string]: string } = {
    sv: 'SE',
    fi: 'FI',
    // Add more mappings as needed
  };

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  /**
   * Set the locale dynamically.
   * @param newLocale The new locale to set
   */
  public setLocale(newLocale: string): void {
    this.locale = newLocale;
  }

  /**
   * Get the ISO 3166-1 alpha-2 country code from the locale.
   */
  public getCountryCode(): string {
    return this.localeToCountryCode[this.locale] || 'SE';
  }

  /**
   * Get the list of supported region codes.
   * @returns An array of supported region codes.
   */
  public getSupportedRegions(): RegionCode[] {
    return Array.from(this.phoneUtil.getSupportedRegions()) as RegionCode[];
  }

  /**
   * Parse a phone number in string format to a PhoneNumber object.
   * @param phoneNumberString The phone number as a string
   * @returns Parsed PhoneNumber object
   */
  parsePhoneNumber(phoneNumberString: string): PhoneNumber {
    const countryCode = this.getCountryCode();
    return this.phoneUtil.parse(phoneNumberString, countryCode);
  }

  /**
   * Format a PhoneNumber object into a specific format.
   * @param phoneNumber The PhoneNumber object to format
   * @param format The format type (e.g., international, national)
   * @returns The formatted phone number as a string
   */
  formatPhoneNumber(
    phoneNumber: PhoneNumber,
    format: PhoneNumberFormat
  ): string {
    return this.phoneUtil.format(phoneNumber, format);
  }

  /**
   * Checks if a parsed PhoneNumber object is valid.
   * @param phoneNumber The PhoneNumber object to validate.
   * @returns True if the number is valid, false otherwise.
   */
  isValidNumber(phoneNumber: PhoneNumber): boolean {
    return this.phoneUtil.isValidNumber(phoneNumber);
  }

  /**
   * Validate if a phone number is valid for the locale's country.
   * @param phoneNumberString The phone number as a string
   * @returns True if the number is valid, false otherwise
   */
  isValidNumberForRegion(phoneNumberString: string): boolean {
    try {
      const phoneNumber = this.parsePhoneNumber(phoneNumberString);
      return this.phoneUtil.isValidNumberForRegion(
        phoneNumber,
        this.getCountryCode()
      );
    } catch (error) {
      return false;
    }
  }

  /**
   * Checks if a phone number is possible for the region and provides a reason if it's invalid.
   * @param phoneNumber The PhoneNumber object.
   * @returns The validation result (e.g., TOO_SHORT, INVALID_COUNTRY_CODE).
   */
  isPossibleNumberWithReason(
    phoneNumber: PhoneNumber
  ): PhoneNumberUtil.ValidationResult {
    return this.phoneUtil.isPossibleNumberWithReason(phoneNumber);
  }

  /**
   * Parses a phone number and returns its national significant number.
   * @param phoneNumberString The phone number as a string
   * @returns The national significant number as a string, or null if parsing fails
   */
  getNationalSignificantNumber(phoneNumberString: string): string | null {
    try {
      const countryCode = this.getCountryCode();
      const phoneNumber = this.phoneUtil.parse(phoneNumberString, countryCode);
      return this.phoneUtil.getNationalSignificantNumber(phoneNumber);
    } catch (error) {
      console.error('Error parsing phone number:', error);
      return null;
    }
  }

  /**
   * Parse a phone number while keeping the raw input.
   * @param phoneNumberString The phone number as a string.
   * @returns Parsed PhoneNumber object with the raw input retained.
   */
  parseAndKeepRawInput(phoneNumberString: string): PhoneNumber {
    const countryCode = this.getCountryCode();
    return this.phoneUtil.parseAndKeepRawInput(phoneNumberString, countryCode);
  }
}
