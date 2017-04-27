import { Component, OnInit, ViewChildren, ViewChild, ViewContainerRef, QueryList, AfterViewInit, ComponentFactoryResolver } from '@angular/core';

import { ProductionComponent } from '../../components';
import { DataModelService } from '../../services';

@Component({
    selector: 'belsim-data-model',
    templateUrl: './data-model.component.tpl.html',
    styleUrls: ['./data-model.component.css']
})
export class DataModelComponent implements OnInit, AfterViewInit {

    @ViewChildren('dynamic', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;
    @ViewChild('sidenav2') private extendedSidenav: any;

    public tabs: belsim.simulation.ITab[] = [
        { id: 'production', title: 'Belsim.Tabs.Stock' },
        { id: 'production', title: 'Belsim.Tabs.Realization' },
        { id: 'production', title: 'Belsim.Tabs.Supply' },
        { id: 'production', title: 'Belsim.Tabs.Finance' },
        { id: 'production', title: 'Belsim.Tabs.Loans' },
        { id: 'production', title: 'Belsim.Tabs.Expenses' },
        { id: 'production', title: 'Belsim.Tabs.PrincipalСash' },
        { id: 'production', title: 'Belsim.Tabs.Taxes' },
        { id: 'production', title: 'Belsim.Tabs.Accounts' }
    ];

    public dataModel: belsim.api.IDataModel;
    public products: belsim.api.IProduct[];
    public resources: belsim.api.IProductionResource[];

    public isExtendedSidenavOpened: boolean;

    private components = {
        production: MockComponent
    };

    public constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private dataModelService: DataModelService
    ) { }

    public ngOnInit(): void {
        this.dataModel = this.dataModelService.getModel();
        this.products = this.dataModelService.getProducts();
    }

    public openExtendedSidenav(productionCycle: belsim.api.IProductionCycle) {
        if (!!productionCycle) {
            this.extendedSidenav.open();
            this.resources = productionCycle.resources;
        } else {
            this.extendedSidenav.close();
        }
    }

    public ngAfterViewInit(): void {
        for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
            let conf = this.tabs[i];
            let component = this.components[conf.id];
            if (component) {
                let target = this.widgetTargets.toArray()[i];
                let componentInstance = this.componentFactoryResolver.resolveComponentFactory(component);
                let cmpRef: any = target.createComponent(componentInstance);

                if (cmpRef.instance.hasOwnProperty('title')) {
                    cmpRef.instance.title = conf.title;
                }
            }
        }
    }
}

@Component({
    selector: 'belsim-mock',
    template: '<div></div>',
    styleUrls: ['./data-model.component.css']
})
export class MockComponent {
}