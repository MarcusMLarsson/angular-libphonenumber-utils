import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { ValidatorDemoComponent } from './components/validator-demo/validator-demo.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pipe', component: PipeDemoComponent },
  { path: 'directive', component: DirectiveDemoComponent },
  { path: 'validator', component: ValidatorDemoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
