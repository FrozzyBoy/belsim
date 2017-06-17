import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'belsim-realization',
	templateUrl: 'realization.component.html',
	styleUrls: ['./realization.component.css']
})

export class RealizationComponent implements OnInit {
	@Input() public graphicTypes: belsim.api.IGraphicTypes;
	@Input() public production: belsim.api.IProduction;
	@Input() public products: belsim.api.IProduct[];

	constructor() { }

	ngOnInit() {
	}
	/**
	 * setManual
	 */
	public setManual(value: number) {
		console.log(value);
	}
}