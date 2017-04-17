import { Component, OnInit, ViewChildren, ViewChild, ViewContainerRef, QueryList, AfterViewInit, ComponentFactoryResolver } from '@angular/core';

import { ProductionComponent } from '../../components';
import { DataModelService } from '../../services';

@Component({
  selector: 'belsim-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit, AfterViewInit {

  @ViewChildren('dynamic', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;
  @ViewChild('sidenav2') private extendedSidenav: any;

  public tabs: belsim.simulation.ITab[] = [
    { id: 'production', title: 'Производство' },
    // { id: 'production', title: 'Запасы' },
    // { id: 'production', title: 'Реализация' },
    // { id: 'production', title: 'Снабжение' },
    // { id: 'production', title: 'Финансы' },
    // { id: 'production', title: 'Кредиты' },
    // { id: 'production', title: 'Затраты' },
    // { id: 'production', title: 'Основные средства' },
    // { id: 'production', title: 'Налоги' },
    // { id: 'production', title: 'Счета' }
  ];

  public simulationModel: any;

  public isExtendedSidenavOpened: boolean;

  public resources: any[];

  private components = {
    'production': ProductionComponent
  };

  public constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dataModelService: DataModelService
  ) { }

  public ngOnInit(): void {
    this.simulationModel = this.dataModelService.getModel();
  }

  public openExtendedSidenav($event: any) {
    if (!!$event) {
      this.extendedSidenav.open();
      this.resources = $event.resources;
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