import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardNumCardChartComponent } from './components/dashboard/dashboard-num-card-chart/dashboard-num-card-chart.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GestionComponent,
    PieChartComponent,
    DashboardNumCardChartComponent,
    SalesComponent,
    InventoryComponent
  ],
  imports: [
    MatTooltipModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
