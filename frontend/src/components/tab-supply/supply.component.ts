import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'belsim-supply',
    templateUrl: 'supply.component.html',
    styleUrls:["./supply.component.css"]
})

export class SupplyComponent implements OnInit {
    @Input() public graphicTypes: belsim.api.IGraphicTypes;
    @Input() public production: belsim.api.IProduction;
    @Input() public products: belsim.api.IProduct[];

    constructor() { }

    ngOnInit() { }
}