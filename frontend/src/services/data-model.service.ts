import { Injectable } from '@angular/core';

let model = require('./modelData-en.json');
let products = require('./products-en.json');

@Injectable()
export class DataModelService {

    public getModel(): belsim.api.IDataModel {
        return model;
    }

    public getProducts(): belsim.api.IProduct[] {
        return products;
    }
}