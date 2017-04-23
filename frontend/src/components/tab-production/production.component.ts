import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'belsim-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ProductionComponent implements OnChanges {

    @Input() public production: belsim.api.IProduction;
    @Input() public products: belsim.api.IProduct[];

    @Output() public onProductionChange: EventEmitter<belsim.api.IProduction> = new EventEmitter();;
    @Output() public onCycleChange: EventEmitter<any> = new EventEmitter();

    private prevChecked: any;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['production']) {

        }

        if (changes['products']) {

        }
    }

    public changePlanningInterval(planningInterval: number) {
        this.production.planningInterval = planningInterval;
        this.onProductionChange.emit(this.production);
    }

    public changePlanningIntervalsCount(planningIntervalsCount: number) {
        this.production.planningIntervalsCount = planningIntervalsCount;
        this.onProductionChange.emit(this.production);
    }

    public productChanged(id: string, productionCycle: belsim.api.IProductionCycle) {
        productionCycle.product.id = id;
        productionCycle.product.name = this.products.find(p => p.id === id).name;
    }

    public selectCycle($event: any, productionCycle: belsim.api.IProductionCycle) {
        productionCycle.isChecked = $event.checked;

        if (this.prevChecked && this.prevChecked !== productionCycle) {
            this.prevChecked.isChecked = false;
            this.prevChecked = productionCycle;
        }

        if (!this.prevChecked) {
            this.prevChecked = productionCycle;
        }

        this.onCycleChange.emit(productionCycle.isChecked ? productionCycle : undefined);
    }
}