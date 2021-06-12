import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InstallationComponent } from './pages/installation/installation.component';
import { MotivationComponent } from './pages/motivation/motivation.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ConfigComponent } from './pages/config/config.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ServiceComponent } from './pages/service/service.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { FeatureComponent } from './pages/feature/feature.component';

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'installation', component: InstallationComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'translaze-service', component: ServiceComponent },
  { path: 'translaze-pipe', component: PipeComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'feature-module', component: FeatureComponent },
  { path: 'motivation', component: MotivationComponent },
];

const extraOptions: ExtraOptions = {
  useHash: false,
  relativeLinkResolution: 'corrected',
  // scrollPositionRestoration: 'enabled'
  // anchorScrolling: 'enabled',
  // onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
