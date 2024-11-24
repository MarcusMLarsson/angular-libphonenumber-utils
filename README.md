# Phone Utils for Angular
This repository offers a set of ready-to-use tools for integrating Google's [libphonenumber](https://github.com/google/libphonenumber) into your Angular application. These tools make it easy to format and validate phone numbers.
## Features

- **Phone Number Pipe**:   Format phone numbers according to the selected locale in various styles,
      such as international, national, E164, and RFC3966.
- **Phone Number Directive**: Automatically format phone numbers as you type, applying locale-based
      rules and country code validation.
- **Phone Number Validator**: Validate phone numbers based on the selected locale using Google's
      libphonenumber library.

## Usage

You have two ways to explore and use this project:

### 1. **Use the Demo Page (No Setup Required)**

If you don't want to run the project locally, you can test the functionality througt [live demo page](https://angular-libphonenumber-utils.onrender.com/).The demo page allows you to test the functionality and view the underlying code.

### 2. **Run Locally**
 
If you'd prefer to run the project locally, follow these steps to set it up:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/phone-utils-angular.git
   cd phone-utils-angular
   npm install
   ng build phone-utils
   npm run start
   ```
   
   The app will be available at http://localhost:4200.


###  License
This project is licensed under the [MIT License](LICENSE).
