import { Component, OnInit, ViewChildren, ViewContainerRef, QueryList, AfterViewInit, ComponentFactoryResolver } from '@angular/core';

import { ProductionComponent } from '../../components';

@Component({
  selector: 'belsim-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit, AfterViewInit {

  @ViewChildren('dynamic', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;

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

  private components = {
    'production': ProductionComponent
  };

  public constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  public ngOnInit(): void {

  }

  public ngAfterViewInit() {
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