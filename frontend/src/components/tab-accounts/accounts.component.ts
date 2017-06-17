import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'belsim-accounts',
    templateUrl: 'accounts.component.html'
})

export class AccountsComponent implements OnInit {

    @Input() public accounts: belsim.api.IAccount[];

    constructor() { }

    ngOnInit() { }


}