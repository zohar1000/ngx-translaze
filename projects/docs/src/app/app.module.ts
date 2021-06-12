import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
/* any other core modules */
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { InstallationComponent } from './pages/installation/installation.component';
import { MotivationComponent } from './pages/motivation/motivation.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ConfigComponent } from './pages/config/config.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ServiceComponent } from './pages/service/service.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { TipsComponent } from './pages/tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    MotivationComponent,
    BenefitsComponent,
    ConfigComponent,
    IntroComponent,
    ServiceComponent,
    PipeComponent,
    FeatureComponent,
    TipsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Covalent
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentFlavoredMarkdownModule,

    // Material
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
