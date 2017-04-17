import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SimulationComponent } from './containers';
import { OutputVisualizationComponent } from './components';
import { ProductionComponent } from './components';
import { DataModelService } from './services';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        SimulationComponent,
        OutputVisualizationComponent,
        ProductionComponent
    ],
    providers: [DataModelService],
    bootstrap: [SimulationComponent],
    entryComponents: [ProductionComponent]
})
export class AppModule { }