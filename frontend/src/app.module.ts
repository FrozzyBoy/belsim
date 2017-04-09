import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { SimulationComponent } from './containers';
import { OutputVisualizationComponent } from './components';
import { ProductionComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule
    ],
    declarations: [
        SimulationComponent,
        OutputVisualizationComponent,
        ProductionComponent
    ],
    bootstrap: [SimulationComponent],
    entryComponents: [ProductionComponent]
})
export class AppModule { }