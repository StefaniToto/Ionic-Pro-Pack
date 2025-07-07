import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalizationModuleModule } from './globalization-module/globalization-module.module';
import { GoogleAutocompleteModule } from './google-autocomplete/google-autocomplete.module';
import { GooglePlacesModuleModule } from './google-places-module/google-places-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GlobalizationModuleModule,
    GoogleAutocompleteModule,
    GooglePlacesModuleModule,
  ]
})
export class AdvancedFeatureModule { }
