declare namespace belsim.api {
    interface IDataModel {
        production: IProduction;
    }

    interface IProduction {
        planningInterval: number;
        planningIntervalsCount: number;
        cycle: IProductionCycle[];
    }

    interface IProductionCycle {
        product: string;
        quantity: number;
        resources: IProductionResource[]
    }

    interface IProductionResource {
        name: string;
        consumption: number;
    }
}