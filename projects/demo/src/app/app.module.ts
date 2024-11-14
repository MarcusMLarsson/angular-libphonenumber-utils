import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneUtilsModule } from 'phone-utils';
import { FormsModule } from '@angular/forms';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { ValidatorDemoComponent } from './components/validator-demo/validator-demo.component';

@NgModule({
  declarations: [AppComponent, PipeDemoComponent, DirectiveDemoComponent, ValidatorDemoComponent],
  imports: [BrowserModule, AppRoutingModule, PhoneUtilsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
