import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslazeFeatureModule } from 'ngx-translaze';
import { NgCondModule } from 'ng-cond';

const imports = [
  // angular
  CommonModule,
  // FormsModule,
  // ReactiveFormsModule,

  TranslazeFeatureModule,
  NgCondModule
];

@NgModule({
  // imports,
  // exports: [...declarations, ...imports]

  imports,
  exports: [...imports]
})
export class SharedModule {}
