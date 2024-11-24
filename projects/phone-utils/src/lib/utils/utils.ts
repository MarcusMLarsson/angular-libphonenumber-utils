import { RegionCode } from 'google-libphonenumber';

// Maps Angular's LOCALE_ID values (BCP 47 language tags) to ISO 3166-1 alpha-2 country codes,
// allowing compatibility with google-libphonenumber for region-specific formatting and validation.
export const localeToCountryCode: { [key: string]: RegionCode } = {
  'en-AC': 'SH', // Ascension Island
  'ca-AD': 'AD', // Andorra
  'ar-AE': 'AE', // United Arab Emirates
  'fa-AF': 'AF', // Afghanistan
  'en-AG': 'AG', // Antigua and Barbuda
  'en-AI': 'AI', // Anguilla
  'sq-AL': 'AL', // Albania
  'hy-AM': 'AM', // Armenia
  'pt-AO': 'AO', // Angola
  'es-AR': 'AR', // Argentina
  'en-AS': 'AS', // American Samoa
  'de-AT': 'AT', // Austria
  'en-AU': 'AU', // Australia
  'nl-AW': 'AW', // Aruba
  'sv-AX': 'FI', // Åland Islands
  'az-AZ': 'AZ', // Azerbaijan
  'bs-BA': 'BA', // Bosnia and Herzegovina
  'en-BB': 'BB', // Barbados
  'bn-BD': 'BD', // Bangladesh
  'fr-BE': 'BE', // Belgium
  'fr-BF': 'BF', // Burkina Faso
  'bg-BG': 'BG', // Bulgaria
  'ar-BH': 'BH', // Bahrain
  'rn-BI': 'BI', // Burundi
  'fr-BJ': 'BJ', // Benin
  'fr-BL': 'BL', // Saint Barthélemy
  'en-BM': 'BM', // Bermuda
  'ms-BN': 'BN', // Brunei
  'es-BO': 'BO', // Bolivia
  'nl-BQ': 'NL', // Bonaire, Sint Eustatius, and Saba
  'pt-BR': 'BR', // Brazil
  'en-BS': 'BS', // Bahamas
  'dz-BT': 'BT', // Bhutan
  'en-BW': 'BW', // Botswana
  'be-BY': 'BY', // Belarus
  'en-BZ': 'BZ', // Belize
  'en-CA': 'CA', // Canada
  'en-CC': 'CC', // Cocos (Keeling) Islands
  'fr-CD': 'CD', // Democratic Republic of the Congo
  'fr-CF': 'CF', // Central African Republic
  'fr-CG': 'CG', // Republic of the Congo
  'de-CH': 'CH', // Switzerland
  'fr-CI': 'CI', // Côte d'Ivoire
  'en-CK': 'CK', // Cook Islands
  'es-CL': 'CL', // Chile
  'fr-CM': 'CM', // Cameroon
  'zh-CN': 'CN', // China
  'es-CO': 'CO', // Colombia
  'es-CR': 'CR', // Costa Rica
  'es-CU': 'CU', // Cuba
  'pt-CV': 'CV', // Cape Verde
  'nl-CW': 'CW', // Curaçao
  'en-CX': 'CX', // Christmas Island
  'el-CY': 'CY', // Cyprus
  'cs-CZ': 'CZ', // Czech Republic
  'de-DE': 'DE', // Germany
  'fr-DJ': 'DJ', // Djibouti
  'da-DK': 'DK', // Denmark
  'en-DM': 'DM', // Dominica
  'es-DO': 'DO', // Dominican Republic
  'ar-DZ': 'DZ', // Algeria
  'es-EC': 'EC', // Ecuador
  'et-EE': 'EE', // Estonia
  'ar-EG': 'EG', // Egypt
  'es-EH': 'EH', // Western Sahara
  'ti-ER': 'ER', // Tigrinya - Eritrea
  'es-ES': 'ES', // Spain
  'am-ET': 'ET', // Amharic - Ethiopia
  'fi-FI': 'FI', // Finland
  'en-FJ': 'FJ', // Fiji
  'en-FK': 'FK', // Falkland Islands
  'en-FM': 'FM', // Micronesia
  'fo-FO': 'FO', // Faroe Islands
  'fr-FR': 'FR', // France
  'fr-GA': 'GA', // Gabon
  'en-GB': 'GB', // United Kingdom
  'en-GD': 'GD', // Grenada
  'ka-GE': 'GE', // Georgian - Georgia
  'fr-GF': 'FR', // French Guiana
  'en-GG': 'GG', // Guernsey
  'en-GH': 'GH', // English - Ghana
  'el-GR': 'GR', // Greek - Greece
  'es-GT': 'GT', // Spanish - Guatemala
  'en-GU': 'GU', // English - Guam
  'pt-GW': 'GW', // Portuguese - Guinea-Bissau
  'en-GY': 'GY', // English - Guyana
  'zh-HK': 'HK', // Chinese - Hong Kong
  'es-HN': 'HN', // Spanish - Honduras
  'hr-HR': 'HR', // Croatian - Croatia
  'ht-HT': 'HT', // Haitian Creole - Haiti
  'hu-HU': 'HU', // Hungarian - Hungary
  'id-ID': 'ID', // Indonesian - Indonesia
  'en-IE': 'IE', // English - Ireland
  'he-IL': 'IL', // Hebrew - Israel
  'hi-IN': 'IN', // Hindi - India
  'ar-IQ': 'IQ', // Arabic - Iraq
  'fa-IR': 'IR', // Persian - Iran
  'is-IS': 'IS', // Icelandic - Iceland
  'it-IT': 'IT', // Italian - Italy
  'en-JE': 'JE', // English - Jersey
  'en-JM': 'JM', // English - Jamaica
  'ar-JO': 'JO', // Arabic - Jordan
  'ja-JP': 'JP', // Japanese - Japan
  'sw-KE': 'KE', // Swahili - Kenya
  'ky-KG': 'KG', // Kyrgyz - Kyrgyzstan
  'km-KH': 'KH', // Khmer - Cambodia
  'en-KI': 'KI', // English - Kiribati
  'fr-KM': 'KM', // French - Comoros
  'en-KN': 'KN', // English - Saint Kitts and Nevis
  'ko-KR': 'KR', // Korean - South Korea
  'en-KW': 'KW', // English - Kuwait
  'ky-KY': 'KY', // English - Cayman Islands
  'ru-KZ': 'KZ', // Russian - Kazakhstan
  'lo-LA': 'LA', // Lao - Laos
  'ar-LB': 'LB', // Arabic - Lebanon
  'en-LC': 'LC', // English - Saint Lucia
  'de-LI': 'LI', // German - Liechtenstein
  'si-LK': 'LK', // Sinhala - Sri Lanka
  'en-LR': 'LR', // English - Liberia
  'en-LS': 'LS', // English - Lesotho
  'lt-LT': 'LT', // Lithuanian - Lithuania
  'fr-LU': 'LU', // French - Luxembourg
  'lv-LV': 'LV', // Latvian - Latvia
  'ar-LY': 'LY', // Arabic - Libya
  'ar-MA': 'MA', // Arabic - Morocco
  'fr-MC': 'MC', // French - Monaco
  'ro-MD': 'MD', // Romanian - Moldova
  'sr-ME': 'ME', // Serbian - Montenegro
  'fr-MF': 'MF', // French - Saint Martin
  'mg-MG': 'MG', // Malagasy - Madagascar
  'mh-MH': 'MH', // Marshallese - Marshall Islands
  'mk-MK': 'MK', // Macedonian - North Macedonia
  'fr-ML': 'ML', // French - Mali
  'my-MM': 'MM', // Burmese - Myanmar
  'mn-MN': 'MN', // Mongolian - Mongolia
  'zh-MO': 'MO', // Chinese - Macau
  'en-MP': 'MP', // English - Northern Mariana Islands
  'fr-MQ': 'FR', // French - Martinique
  'ar-MR': 'MR', // Arabic - Mauritania
  'en-MS': 'MS', // English - Montserrat
  'mt-MT': 'MT', // Maltese - Malta
  'en-MU': 'MU', // English - Mauritius
  'dv-MV': 'MV', // Dhivehi - Maldives
  'en-MW': 'MW', // English - Malawi
  'es-MX': 'MX', // Spanish - Mexico
  'ms-MY': 'MY', // Malay - Malaysia
  'pt-MZ': 'MZ', // Portuguese - Mozambique
  'en-NA': 'NA', // English - Namibia
  'fr-NC': 'NC', // French - New Caledonia
  'fr-NE': 'NE', // French - Niger
  'en-NF': 'NF', // English - Norfolk Island
  'en-NG': 'NG', // English - Nigeria
  'es-NI': 'NI', // Spanish - Nicaragua
  'nl-NL': 'NL', // Dutch - Netherlands
  'nb-NO': 'NO', // Norwegian - Norway
  'ne-NP': 'NP', // Nepali - Nepal
  'en-NR': 'NR', // English - Nauru
  'niu-NU': 'NU', // Niuean - Niue
  'en-NZ': 'NZ', // English - New Zealand
  'ar-OM': 'OM', // Arabic - Oman
  'es-PA': 'PA', // Spanish - Panama
  'es-PE': 'PE', // Spanish - Peru
  'fr-PF': 'FR', // French - French Polynesia
  'en-PG': 'PG', // English - Papua New Guinea
  'en-PH': 'PH', // English - Philippines
  'ur-PK': 'PK', // Urdu - Pakistan
  'pl-PL': 'PL', // Polish - Poland
  'fr-PM': 'FR', // French - Saint Pierre and Miquelon
  'es-PR': 'PR', // Spanish - Puerto Rico
  'ar-PS': 'PS', // Arabic - Palestine
  'pt-PT': 'PT', // Portuguese - Portugal
  'en-PW': 'PW', // English - Palau
  'es-PY': 'PY', // Spanish - Paraguay
  'ar-QA': 'QA', // Arabic - Qatar
  'fr-RE': 'FR', // French - Réunion
  'ro-RO': 'RO', // Romanian - Romania
  'sr-RS': 'RS', // Serbian - Serbia
  'ru-RU': 'RU', // Russian - Russia
  'rw-RW': 'RW', // Kinyarwanda - Rwanda
  'ar-SA': 'SA', // Arabic - Saudi Arabia
  'en-SB': 'SB', // English - Solomon Islands
  'fr-SC': 'SC', // French - Seychelles
  'ar-SD': 'SD', // Arabic - Sudan
  'sv-SE': 'SE', // Swedish - Sweden
  'en-SG': 'SG', // English - Singapore
  'en-SH': 'SH', // English - Saint Helena
  'sl-SI': 'SI', // Slovenian - Slovenia
  'nb-SJ': 'NO', // Norwegian - Svalbard and Jan Mayen
  'sk-SK': 'SK', // Slovak - Slovakia
  'en-SL': 'SL', // English - Sierra Leone
  'it-SM': 'SM', // Italian - San Marino
  'fr-SN': 'SN', // French - Senegal
  'so-SO': 'SO', // Somali - Somalia
  'nl-SR': 'SR', // Dutch - Suriname
  'en-SS': 'SS', // English - South Sudan
  'pt-ST': 'ST', // Portuguese - São Tomé and Príncipe
  'es-SV': 'SV', // Spanish - El Salvador
  'nl-SX': 'SX', // Dutch - Sint Maarten
  'ar-SY': 'SY', // Arabic - Syria
  'en-SZ': 'SZ', // English - Eswatini
  'en-TA': 'SH', // English - Tristan da Cunha
  'en-TC': 'TC', // English - Turks and Caicos Islands
  'fr-TD': 'TD', // French - Chad
  'fr-TG': 'TG', // French - Togo
  'th-TH': 'TH', // Thai - Thailand
  'tg-TJ': 'TJ', // Tajik - Tajikistan
  'en-TK': 'TK', // English - Tokelau
  'tet-TL': 'TL', // Tetum - Timor-Leste
  'tk-TM': 'TM', // Turkmen - Turkmenistan
  'ar-TN': 'TN', // Arabic - Tunisia
  'to-TO': 'TO', // Tongan - Tonga
  'tr-TR': 'TR', // Turkish - Turkey
  'en-TT': 'TT', // English - Trinidad and Tobago
  'en-TV': 'TV', // English - Tuvalu
  'zh-TW': 'TW', // Chinese - Taiwan
  'sw-TZ': 'TZ', // Swahili - Tanzania
  'uk-UA': 'UA', // Ukrainian - Ukraine
  'en-UG': 'UG', // English - Uganda
  'en-US': 'US', // English - United States
  'es-UY': 'UY', // Spanish - Uruguay
  'uz-UZ': 'UZ', // Uzbek - Uzbekistan
  'it-VA': 'VA', // Italian - Vatican City
  'en-VC': 'VC', // English - Saint Vincent and the Grenadines
  'es-VE': 'VE', // Spanish - Venezuela
  'en-VG': 'VG', // English - British Virgin Islands
  'en-VI': 'VI', // English - United States Virgin Islands
  'vi-VN': 'VN', // Vietnamese - Vietnam
  'fr-VU': 'VU', // French - Vanuatu
  'fr-WF': 'FR', // French - Wallis and Futuna
  'sm-WS': 'WS', // Samoan - Samoa
  'sq-XK': 'XK', // Albanian - Kosovo
  'ar-YE': 'YE', // Arabic - Yemen
  'fr-YT': 'YT', // French - Mayotte
  'af-ZA': 'ZA', // Afrikaans - South Africa
  'en-ZM': 'ZM', // English - Zambia
  'en-ZW': 'ZW', // English - Zimbabwe
};

export const countryDropdownOptions = [
  { value: 'SH', label: 'Ascension Island' },
  { value: 'AD', label: 'Andorra' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'AF', label: 'Afghanistan' },
  { value: 'AG', label: 'Antigua and Barbuda' },
  { value: 'AI', label: 'Anguilla' },
  { value: 'AL', label: 'Albania' },
  { value: 'AM', label: 'Armenia' },
  { value: 'AO', label: 'Angola' },
  { value: 'AR', label: 'Argentina' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AT', label: 'Austria' },
  { value: 'AU', label: 'Australia' },
  { value: 'AW', label: 'Aruba' },
  { value: 'FI', label: 'Åland Islands' },
  { value: 'AZ', label: 'Azerbaijan' },
  { value: 'BA', label: 'Bosnia and Herzegovina' },
  { value: 'BB', label: 'Barbados' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'BE', label: 'Belgium' },
  { value: 'BF', label: 'Burkina Faso' },
  { value: 'BG', label: 'Bulgaria' },
  { value: 'BH', label: 'Bahrain' },
  { value: 'BI', label: 'Burundi' },
  { value: 'BJ', label: 'Benin' },
  { value: 'BL', label: 'Saint Barthélemy' },
  { value: 'BM', label: 'Bermuda' },
  { value: 'BN', label: 'Brunei' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'NL', label: 'Bonaire, Sint Eustatius, and Saba' },
  { value: 'BR', label: 'Brazil' },
  { value: 'BS', label: 'Bahamas' },
  { value: 'BT', label: 'Bhutan' },
  { value: 'BW', label: 'Botswana' },
  { value: 'BY', label: 'Belarus' },
  { value: 'BZ', label: 'Belize' },
  { value: 'CA', label: 'Canada' },
  { value: 'CC', label: 'Cocos (Keeling) Islands' },
  { value: 'CD', label: 'Democratic Republic of the Congo' },
  { value: 'CF', label: 'Central African Republic' },
  { value: 'CG', label: 'Republic of the Congo' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'CI', label: "Côte d'Ivoire" },
  { value: 'CK', label: 'Cook Islands' },
  { value: 'CL', label: 'Chile' },
  { value: 'CM', label: 'Cameroon' },
  { value: 'CN', label: 'China' },
  { value: 'CO', label: 'Colombia' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'CU', label: 'Cuba' },
  { value: 'CV', label: 'Cape Verde' },
  { value: 'CW', label: 'Curaçao' },
  { value: 'CX', label: 'Christmas Island' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'DE', label: 'Germany' },
  { value: 'DJ', label: 'Djibouti' },
  { value: 'DK', label: 'Denmark' },
  { value: 'DM', label: 'Dominica' },
  { value: 'DO', label: 'Dominican Republic' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'EE', label: 'Estonia' },
  { value: 'EG', label: 'Egypt' },
  { value: 'EH', label: 'Western Sahara' },
  { value: 'ER', label: 'Eritrea' },
  { value: 'ES', label: 'Spain' },
  { value: 'ET', label: 'Ethiopia' },
  { value: 'FI', label: 'Finland' },
  { value: 'FJ', label: 'Fiji' },
  { value: 'FK', label: 'Falkland Islands' },
  { value: 'FM', label: 'Micronesia' },
  { value: 'FO', label: 'Faroe Islands' },
  { value: 'FR', label: 'France' },
  { value: 'GA', label: 'Gabon' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'GD', label: 'Grenada' },
  { value: 'GE', label: 'Georgia' },
  { value: 'GG', label: 'Guernsey' },
  { value: 'GH', label: 'Ghana' },
  { value: 'GR', label: 'Greece' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'GU', label: 'Guam' },
  { value: 'GW', label: 'Guinea-Bissau' },
  { value: 'GY', label: 'Guyana' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'HN', label: 'Honduras' },
  { value: 'HR', label: 'Croatia' },
  { value: 'HT', label: 'Haiti' },
  { value: 'HU', label: 'Hungary' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'IE', label: 'Ireland' },
  { value: 'IL', label: 'Israel' },
  { value: 'IN', label: 'India' },
  { value: 'IQ', label: 'Iraq' },
  { value: 'IR', label: 'Iran' },
  { value: 'IS', label: 'Iceland' },
  { value: 'IT', label: 'Italy' },
  { value: 'JM', label: 'Jamaica' },
  { value: 'JO', label: 'Jordan' },
  { value: 'JP', label: 'Japan' },
  { value: 'KE', label: 'Kenya' },
  { value: 'KG', label: 'Kyrgyzstan' },
  { value: 'KH', label: 'Cambodia' },
  { value: 'KI', label: 'Kiribati' },
  { value: 'KM', label: 'Comoros' },
  { value: 'KN', label: 'Saint Kitts and Nevis' },
  { value: 'KR', label: 'South Korea' },
  { value: 'KW', label: 'Kuwait' },
  { value: 'KZ', label: 'Kazakhstan' },
  { value: 'LA', label: 'Laos' },
  { value: 'LB', label: 'Lebanon' },
  { value: 'LC', label: 'Saint Lucia' },
  { value: 'LI', label: 'Liechtenstein' },
  { value: 'LK', label: 'Sri Lanka' },
  { value: 'LR', label: 'Liberia' },
  { value: 'LS', label: 'Lesotho' },
  { value: 'LT', label: 'Lithuania' },
  { value: 'LU', label: 'Luxembourg' },
  { value: 'LV', label: 'Latvia' },
  { value: 'LY', label: 'Libya' },
  { value: 'MA', label: 'Morocco' },
  { value: 'MC', label: 'Monaco' },
  { value: 'MD', label: 'Moldova' },
  { value: 'ME', label: 'Montenegro' },
  { value: 'MG', label: 'Madagascar' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'MK', label: 'North Macedonia' },
  { value: 'ML', label: 'Mali' },
  { value: 'MM', label: 'Myanmar' },
  { value: 'MN', label: 'Mongolia' },
  { value: 'MO', label: 'Macau' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'MR', label: 'Mauritania' },
  { value: 'MT', label: 'Malta' },
  { value: 'MU', label: 'Mauritius' },
  { value: 'MV', label: 'Maldives' },
  { value: 'MW', label: 'Malawi' },
  { value: 'MX', label: 'Mexico' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'MZ', label: 'Mozambique' },
  { value: 'NA', label: 'Namibia' },
  { value: 'NC', label: 'New Caledonia' },
  { value: 'NE', label: 'Niger' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'NI', label: 'Nicaragua' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'NO', label: 'Norway' },
  { value: 'NP', label: 'Nepal' },
  { value: 'NR', label: 'Nauru' },
  { value: 'NU', label: 'Niue' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'OM', label: 'Oman' },
  { value: 'PA', label: 'Panama' },
  { value: 'PE', label: 'Peru' },
  { value: 'PG', label: 'Papua New Guinea' },
  { value: 'PH', label: 'Philippines' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'PL', label: 'Poland' },
  { value: 'PT', label: 'Portugal' },
  { value: 'PW', label: 'Palau' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'QA', label: 'Qatar' },
  { value: 'RO', label: 'Romania' },
  { value: 'RS', label: 'Serbia' },
  { value: 'RU', label: 'Russia' },
  { value: 'RW', label: 'Rwanda' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'SB', label: 'Solomon Islands' },
  { value: 'SC', label: 'Seychelles' },
  { value: 'SD', label: 'Sudan' },
  { value: 'SE', label: 'Sweden' },
  { value: 'SG', label: 'Singapore' },
  { value: 'SI', label: 'Slovenia' },
  { value: 'SK', label: 'Slovakia' },
  { value: 'SL', label: 'Sierra Leone' },
  { value: 'SM', label: 'San Marino' },
  { value: 'SN', label: 'Senegal' },
  { value: 'SO', label: 'Somalia' },
  { value: 'SR', label: 'Suriname' },
  { value: 'SS', label: 'South Sudan' },
  { value: 'ST', label: 'São Tomé and Príncipe' },
  { value: 'SV', label: 'El Salvador' },
  { value: 'SX', label: 'Sint Maarten' },
  { value: 'SY', label: 'Syria' },
  { value: 'SZ', label: 'Eswatini' },
  { value: 'TC', label: 'Turks and Caicos Islands' },
  { value: 'TD', label: 'Chad' },
  { value: 'TG', label: 'Togo' },
  { value: 'TH', label: 'Thailand' },
  { value: 'TJ', label: 'Tajikistan' },
  { value: 'TL', label: 'Timor-Leste' },
  { value: 'TM', label: 'Turkmenistan' },
  { value: 'TN', label: 'Tunisia' },
  { value: 'TO', label: 'Tonga' },
  { value: 'TR', label: 'Turkey' },
  { value: 'TT', label: 'Trinidad and Tobago' },
  { value: 'TV', label: 'Tuvalu' },
  { value: 'TW', label: 'Taiwan' },
  { value: 'TZ', label: 'Tanzania' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'UG', label: 'Uganda' },
  { value: 'US', label: 'United States' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'UZ', label: 'Uzbekistan' },
  { value: 'VA', label: 'Vatican City' },
  { value: 'VC', label: 'Saint Vincent and the Grenadines' },
  { value: 'VE', label: 'Venezuela' },
  { value: 'VG', label: 'British Virgin Islands' },
  { value: 'VI', label: 'United States Virgin Islands' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'VU', label: 'Vanuatu' },
  { value: 'WS', label: 'Samoa' },
  { value: 'YE', label: 'Yemen' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'ZM', label: 'Zambia' },
  { value: 'ZW', label: 'Zimbabwe' },
];

export const pipeCodeSnippetTs = `import { Pipe, PipeTransform } from '@angular/core';
import {
  PhoneNumberUtil,
  PhoneNumberFormat,
  RegionCode,
  PhoneNumber,
} from 'google-libphonenumber';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  private phoneUtil = PhoneNumberUtil.getInstance();
  transform(
    phoneValue: number | string,
    format: 'national' | 'international' | 'e164' | 'rfc3966' = 'national',
    regionCode?: RegionCode
  ): string {
    try {
      const phoneNumber: PhoneNumber = this.phoneUtil.parse(
        phoneValue.toString(),
        regionCode || 'SE'
      );

      switch (format) {
        case 'national':
          return this.phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL);
        case 'international':
          return this.phoneUtil.format(
            phoneNumber,
            PhoneNumberFormat.INTERNATIONAL
          );
        case 'e164':
          return this.phoneUtil.format(phoneNumber, PhoneNumberFormat.E164);
        case 'rfc3966':
          return this.phoneUtil.format(phoneNumber, PhoneNumberFormat.RFC3966);
        default:
          return this.phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL);
      }
    } catch (error) {
      if (phoneValue === null || phoneValue.toString().trim() === '') return '';
      return phoneValue
        .toString()
        .trim()
        .replace(/[^0-9]/g, '');
    }
  }
}`;

export const pipeCodeSnippetHtml = `{{ phone | phoneNumber : "international" : "US" }}`;

export const directiveCodeSnippetTs = `import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
  OnChanges,
  OnInit,
} from '@angular/core';
import { AsYouTypeFormatter, RegionCode } from 'google-libphonenumber';

@Directive({
  selector: '[czPhoneNumberDirective]',
})
export class PhoneNumberDirective implements OnChanges, OnInit {
  private debounceTimeout: any;
  @Input() regionCode?: RegionCode;
  rawPhoneNumber!: string;

  constructor(private el: ElementRef) {}

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

      const formatter = new AsYouTypeFormatter(this.regionCode || 'SE');
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
`;
export const directiveCodeSnippetHtml = `<input
  czPhoneNumberDirective
  [regionCode]="regionCode"
  type="text"
/>`;

export const validatorCodeSnippetTs = `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil, RegionCode, PhoneNumber, PhoneNumberFormat } from 'google-libphonenumber';

export function phoneNumberValidator(regionCode?: RegionCode): ValidatorFn {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const ValidationEnum = PhoneNumberUtil.ValidationResult;

  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumberInput = control.value;

    if (!phoneNumberInput || phoneNumberInput.trim().length === 0) {
      control.markAsPristine();
      return null;
    }

    try {
      // Parse the phone number without modifying the raw input.
      const phoneNumber: PhoneNumber = phoneUtil.parseAndKeepRawInput(phoneNumberInput, regionCode || 'SE');
      const validationResult = phoneUtil.isPossibleNumberWithReason(phoneNumber);

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
          if (!phoneUtil.isValidNumber(phoneNumber)) {
            return { isPossibleLocalOnly: true };
          }
          break;
        case ValidationEnum.IS_POSSIBLE:
          if (!phoneUtil.isValidNumber(phoneNumber)) {
            return { phoneNumberInvalid: true };
          }
          break;
      }
    } catch (error) {
      return { phoneNumberInvalid: true };
    }

    return null;
  };
}`;
export const validatorCodeSnippetHtml = `<form [formGroup]="phoneForm">
<div class="form-section">
  <label for="phoneNumber">Phone Number:</label>
  <input id="phoneNumber" formControlName="phoneNumber" />

  <div *ngIf="phoneForm.controls['phoneNumber'].invalid">
    <small
      *ngIf="phoneForm.controls['phoneNumber'].hasError('required')"
    >
      Phone number is required.
    </small>
    <small
      *ngIf="
        phoneForm.controls['phoneNumber'].hasError('invalidCountryCode')
      "
    >
      Invalid country code.
    </small>
    <small
      *ngIf="phoneForm.controls['phoneNumber'].hasError('tooShort')"
    >
      Phone number is too short.
    </small>
    <small
      *ngIf="phoneForm.controls['phoneNumber'].hasError('tooLong')"
    >
      Phone number is too long.
    </small>
    <small
      *ngIf="
        phoneForm.controls['phoneNumber'].hasError('phoneNumberInvalid')
      "
    >
      Phone number is invalid.
    </small>
  </div>
</div>
</form>

this.phoneForm = this.fb.group({
  phoneNumber: [
    '',
    [
      Validators.required,
      phoneNumberValidator('SE'),
    ],
  ],
});
`;
