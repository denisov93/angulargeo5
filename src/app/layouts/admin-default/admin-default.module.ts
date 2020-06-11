import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbCardModule } from '@nebular/theme';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AdminDefaultComponent } from './admin-default.component';
import { DashboardComponent } from 'src/app/admin-modules/dashboard/dashboard.component';
import { InfosComponent } from 'src/app/admin-modules/infos/infos.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AdminManagementComponent } from 'src/app/admin-modules/admin-management/admin-management.component';
import { UserManagementComponent } from 'src/app/admin-modules/user-management/user-management.component';
import { MapManagementComponent } from 'src/app/admin-modules/map-management/map-management.component';

@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashboardComponent,
    InfosComponent,
    AdminManagementComponent,
    UserManagementComponent,
    MapManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    AdminModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    ReactiveFormsModule,    
    FlexLayoutModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [
    DashboardService
  ]
})
export class AdminDefaultModule { }
