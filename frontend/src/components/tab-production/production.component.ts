import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'belsim-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ProductionComponent implements OnChanges {

    @Input() public model: any;

    @Output() public onCycleChange: EventEmitter<any> = new EventEmitter<any>();

    public products: any[] = [];

    public productionCycle: any[];

    private prevChecked: any;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['model']) {
            this.productionCycle = this.model.productionCycles.map((c: any, i: any) => {
                this.products.push({ value: i, viewValue: c.name });
                return {
                    isChecked: false,
                    viewValue: c.name,
                    value: i,
                    duration: c.value,
                    resources: c.resources
                };
            })
        }
    }

    public productChanged($event: any, cycleComponent: any) {
        cycleComponent.value = $event.value;
        cycleComponent.viewValue = this.products.find(p => p.value === $event.value).viewValue;
    }

    public selectCycle($event: any, cycleComponent: any) {
        cycleComponent.isChecked = $event.checked;

        if (this.prevChecked && this.prevChecked !== cycleComponent) {
            this.prevChecked.isChecked = false;
            this.prevChecked = cycleComponent;
        }

        if (!this.prevChecked) {
            this.prevChecked = cycleComponent;
        }

        this.onCycleChange.emit(cycleComponent.isChecked ? cycleComponent : undefined);
    }
}