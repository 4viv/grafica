import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

