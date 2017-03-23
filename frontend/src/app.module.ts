import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { SimulationComponent } from './containers';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule
    ],
    declarations: [
        SimulationComponent
    ],
    bootstrap: [SimulationComponent]
})
export class AppModule { }