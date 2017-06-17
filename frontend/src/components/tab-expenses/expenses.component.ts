import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'belsim-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ["./expenses.component.css"]
})

export class ExpensesComponent implements OnInit {
    @Input() public graphicTypes: belsim.api.IGraphicTypes;
    @Input() public production: belsim.api.IProduction;
    @Input() public products: belsim.api.IProduct[];

    constructor() { }

    ngOnInit() { }
}