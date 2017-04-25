import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { SimulationComponent, DataModelComponent, SimulationResultsComponent, MockComponent } from './containers';
import { OutputVisualizationComponent } from './components';
import { ProductionComponent } from './components';
import { DataModelService } from './services';

import { CustomReuseStrategy } from './router-reuse';

const appRoutes: Routes = [
    {
        path: 'dataModel',
        component: DataModelComponent
    },
    {
        path: 'simulation',
        redirectTo: 'dataModel',
        pathMatch: 'full'
    },
    {
        path: 'simulationResults',
        component: SimulationResultsComponent
    }
];


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations: [
        SimulationComponent,
        DataModelComponent,
        SimulationResultsComponent,
        OutputVisualizationComponent,
        MockComponent,
        ProductionComponent
    ],
    providers: [DataModelService, { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
    bootstrap: [SimulationComponent],
    entryComponents: [ProductionComponent, MockComponent]
})
export class AppModule { }