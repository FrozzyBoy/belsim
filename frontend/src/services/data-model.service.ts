import { Injectable } from '@angular/core';

let model = require('./modelData-en.json');
let products = require('./products-en.json');
let graphicTypes = require('./graphicTypes.json');
let accounts = require('./accounts.json');

@Injectable()
export class DataModelService {

    public getModel(): belsim.api.IDataModel {
        return model;
    }

    public getProducts(): belsim.api.IProduct[] {
        return products;
    }

    public getGraphicTypes(): belsim.api.IGraphicTypes {
        return graphicTypes;
    }

    public getAccounts(): belsim.api.IAccount[] {
        return accounts;
    }
}