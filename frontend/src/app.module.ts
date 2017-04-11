import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { SimulationComponent } from './containers';
import { OutputVisualizationComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule
    ],
    declarations: [
        SimulationComponent,
        OutputVisualizationComponent
    ],
    bootstrap: [SimulationComponent]
})
export class AppModule { }