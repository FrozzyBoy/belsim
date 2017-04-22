import { Injectable } from '@angular/core';

let model = require('./model.json');

@Injectable()
export class DataModelService {

    public getModel(): belsim.api.IDataModel {
        return model;
    }
}