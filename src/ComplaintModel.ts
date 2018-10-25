import { ServiceModel, ProductModel } from ".";
import { CrmModelInterface, ValidationErrorInterface } from ".";
import { validate } from 'serendip-utility'


export class ComplaintModel implements CrmModelInterface {

    constructor(model?: ComplaintModel) {
        if (model) {
            if (model._id)
                this._id = model._id;

            this.crm = model.crm;
            this.product = model.product;
            this.service = model.service;
            this.person = model.person;
            this.product = model.product;
            this.receivedAt = model.receivedAt;
            this.receiver = model.receiver;
            this.company = model.company;
        } else {
            this.receivedAt = new Date();
        }
    }

    _id?: string;

    crm: string;

    service: string;

    product: string;

    company: string;

    person: string;

    receiver: string;

    receivedAt: Date;


    static async validate(model: ComplaintModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];


        if (errs && errs.length > 0)
            throw errs;

    }


}