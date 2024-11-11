import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneNumberService } from '../services/phone-number.service';

/**
 * @summary Validator function to check if an input is a valid phone number for the specified locale.
 * @description This validator function uses google-libphonenumber to validate phone numbers based
 *              on the user’s locale, providing detailed error messages for different types of validation failures.
 *
 * @param phoneNumberService - A service that wraps google-libphonenumber utilities for parsing
 *                             and validating phone numbers.
 * @returns A `ValidatorFn` that checks the validity of the phone number input within an `AbstractControl`.
 *          Returns specific validation errors if the input is invalid.
 *
 * @example
 * ```typescript
 * const phoneControl = new FormControl('', [phoneNumberValidator(phoneNumberService)]);
 * ```
 */
export function phoneNumberValidator(
  phoneNumberService: PhoneNumberService
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumberInput = control.value;
    const ValidationEnum = PhoneNumberUtil.ValidationResult;

    if (!phoneNumberInput || phoneNumberInput.trim().length === 0) {
      control.markAsPristine();
      return null;
    }

    try {
      const phoneNumber =
        phoneNumberService.parseAndKeepRawInput(phoneNumberInput);
      const validationResult =
        phoneNumberService.isPossibleNumberWithReason(phoneNumber);

      switch (validationResult) {
        case ValidationEnum.INVALID_COUNTRY_CODE:
          return { invalidCountryCode: true };
        case ValidationEnum.TOO_SHORT:
          return { tooShort: true };
        case ValidationEnum.TOO_LONG:
          return { tooLong: true };
        case ValidationEnum.INVALID_LENGTH:
          return { invalidLength: true };
        case ValidationEnum.IS_POSSIBLE_LOCAL_ONLY:
          if (!phoneNumberService.isValidNumber(phoneNumber)) {
            return { isPossibleLocalOnly: true };
          }
          break;
        case ValidationEnum.IS_POSSIBLE:
          if (!phoneNumberService.isValidNumber(phoneNumber)) {
            return { phoneNumberInvalid: true };
          }
          break;
      }
    } catch (error) {
      return { phoneNumberInvalid: true };
    }

    return null;
  };
}
