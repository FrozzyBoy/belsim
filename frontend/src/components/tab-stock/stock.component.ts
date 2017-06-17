import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'belsim-stock',
    templateUrl: 'stock.component.html',
    styleUrls:['./stock.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class StockComponent implements OnInit {

    @Input() public production: belsim.api.IProduction;
    @Input() public products: belsim.api.IProduct[];

    constructor() { }

    ngOnInit() { }
}