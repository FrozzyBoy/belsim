import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';

import { SimulationComponent, DataModelComponent, SimulationResultsComponent, MockComponent } from './containers';
import {
    OutputVisualizationComponent
} from './components';
import {
    ProductionComponent,
    FinanceComponent,
    StockComponent,
    AccountsComponent,
    ExpensesComponent,
    LoansComponent,
    PrincipalCashComponent,
    RealizationComponent,
    SupplyComponent,
    TaxesComponent
} from './components';
import { DataModelService } from './services';

import { CustomReuseStrategy } from './router-reuse';

const appRoutes: Routes = [
    {
        path: 'modelData',
        component: DataModelComponent
    },
    {
        path: 'simulation',
        redirectTo: 'modelData',
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
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    declarations: [
        SimulationComponent,
        DataModelComponent,
        SimulationResultsComponent,
        OutputVisualizationComponent,
        MockComponent,
        ProductionComponent,
        FinanceComponent,
        StockComponent,
        AccountsComponent,
        ExpensesComponent,
        LoansComponent,
        PrincipalCashComponent,
        RealizationComponent,
        SupplyComponent,
        TaxesComponent
    ],
    providers: [DataModelService, { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
    bootstrap: [SimulationComponent],
    entryComponents: [ProductionComponent, MockComponent]
})
export class AppModule {
    public constructor( @Inject(TranslateService) translate: TranslateService) {
        const defaultLang = 'en';

        translate.setDefaultLang(defaultLang);
        translate.use(defaultLang);
    }
}

function createTranslateLoader(http: Http): TranslateStaticLoader {
    return new TranslateStaticLoader(http, 'localization/', '.json');
}