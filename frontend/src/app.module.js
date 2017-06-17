"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_translate_1 = require("ng2-translate");
var containers_1 = require("./containers");
var components_1 = require("./components");
var components_2 = require("./components");
var services_1 = require("./services");
var router_reuse_1 = require("./router-reuse");
var appRoutes = [
    {
        path: 'modelData',
        component: containers_1.DataModelComponent
    },
    {
        path: 'simulation',
        redirectTo: 'modelData',
        pathMatch: 'full'
    },
    {
        path: 'simulationResults',
        component: containers_1.SimulationResultsComponent
    }
];
var AppModule = (function () {
    function AppModule(translate) {
        var defaultLang = 'en';
        translate.setDefaultLang(defaultLang);
        translate.use(defaultLang);
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [http_1.Http]
            })
        ],
        declarations: [
            containers_1.SimulationComponent,
            containers_1.DataModelComponent,
            containers_1.SimulationResultsComponent,
            components_1.OutputVisualizationComponent,
            containers_1.MockComponent,
            components_2.ProductionComponent,
            components_2.FinanceComponent,
            components_2.StockComponent,
            components_2.AccountsComponent,
            components_2.ExpensesComponent,
            components_2.LoansComponent,
            components_2.PrincipalCashComponent,
            components_2.RealizationComponent,
            components_2.SupplyComponent,
            components_2.TaxesComponent
        ],
        providers: [services_1.DataModelService, { provide: router_1.RouteReuseStrategy, useClass: router_reuse_1.CustomReuseStrategy }],
        bootstrap: [containers_1.SimulationComponent],
        entryComponents: [components_2.ProductionComponent, containers_1.MockComponent]
    }),
    __param(0, core_1.Inject(ng2_translate_1.TranslateService)),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
], AppModule);
exports.AppModule = AppModule;
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, 'localization/', '.json');
}
//# sourceMappingURL=app.module.js.map