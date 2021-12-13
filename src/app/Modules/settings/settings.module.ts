import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from 'src/app/components/header/navbar/navbar.component';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
  ]
})
export class SettingsModule { }