import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneUtilsModule } from 'phone-utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { ValidatorDemoComponent } from './components/validator-demo/validator-demo.component';
import { CodeSnippetModule } from 'ngx-code-snippet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    DirectiveDemoComponent,
    ValidatorDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneUtilsModule,
    FormsModule,
    ReactiveFormsModule,
    CodeSnippetModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
