import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { SimulationComponent, DataModelComponent, SimulationResultsComponent } from './containers';
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
        path: '',
        redirectTo: '/dataModel',
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
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        SimulationComponent,
        DataModelComponent,
        SimulationResultsComponent,
        OutputVisualizationComponent,
        ProductionComponent
    ],
    providers: [DataModelService, { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
    bootstrap: [SimulationComponent],
    entryComponents: [ProductionComponent]
})
export class AppModule { }