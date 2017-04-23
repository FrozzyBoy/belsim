import { Injectable } from '@angular/core';

let model = require('./model.json');
let products = require('./products.json');

@Injectable()
export class DataModelService {

    public getModel(): belsim.api.IDataModel {
        return model;
    }

    public getProducts(): belsim.api.IProduct[] {
        return products;
    }
}