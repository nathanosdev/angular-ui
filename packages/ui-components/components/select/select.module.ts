import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdDropdownModule } from '../dropdown/dropdown.module';
import { AmdInputModule } from '../amd-form/amd-input/amd-input.module';
import { AmdOptionModule } from '../option/option.module';
import { AmdSelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule, AmdOptionModule,
    AmdInputModule, AmdDropdownModule
  ],
  declarations: [AmdSelectComponent],
  exports: [AmdSelectComponent, AmdOptionModule]
})
export class AmdSelectModule { }