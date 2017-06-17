declare namespace belsim.api {
    interface IDataModel {
        production: IProduction;
    }

    interface IGraphicTypes {
        graphicTypes: string[];
    }

    interface IAccount {
        name: string;
        value: number;
    }

    interface IProduction {
        planningInterval: number;
        planningIntervalsCount: number;
        cycle: IProductionCycle[];
    }

    interface IProductionCycle {
        product: IProduct;
        quantity: number;
        resources: IProductionResource[];
        isChecked?: boolean;
    }

    interface IProductionResource {
        resource: IResource;
        consumption: number;
    }

    interface IProduct {
        id: string;
        name: string;
    }

    interface IResource {
        id: string;
        name: string;
    }
}