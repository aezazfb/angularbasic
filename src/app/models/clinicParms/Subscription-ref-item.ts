import { WorldnetTerminal } from "../ParamModels/WorldnetTerminal";

export class SubscriptionRefItem {
    planId: number|null;
    planDesc:string|null;
    daysPerInterval: number|null;
    planPriceInDollars: number | null;
    isActive: boolean|null;
    checked: boolean|null;
    isDeleted: boolean|null;
    companyId:number|null;
    userID: number | null;
    addby : number;
    addOn:string|null;
    frequency: string | null;
    currency: string | null;
    type: string | null;
    merchantReference: string;
    setupOrder: string | null;
    recurringOrder: RecurringOrder | null;
    jsonResponse: string | null;
    paymentGateway : string;
    branchId : number;
    terminalParams: WorldnetTerminal;
    updatedBy : number | null;
    providerId : number | null;
    subscriptionPlanDetails: SubscriptionRefDetailItem[] = [];
    constructor(){
    }
}
export class SubscriptionRefDetailItem {
    planDetailId:number|null;
    planId: number|null;
    clinicOperationId:number|null;
    clinicOperationName:string|null;
    price:number|null;
    allowedQty:number|null;
    isActive:boolean|null;
    isDeleted: boolean|null;
    userID: number | null;
    checked: boolean;
    constructor(){
    }
}

export class PatientSubscription {
    subscriptionId:number|null;
    patientId:number|null;
    branchId:number|null;
    planId: number|null;
    planMerchantRef:  string;
    startDate: Date|null;
    stopDate: Date|null;
    nextPaymentDate: Date|null;
    renewedOn: Date|null;
    credentialsNumber: string;
    cardHolderName : string;
    subscriptionStatus:number|null;
    userID: number | null;
    isActive:boolean|null;
    StrStartDate: string;
    StrStopDate: string;
    StrNextDate: string;
    StrRenewedOn: string;
    Validate: string;
    planPriceInDollars: number;
    planDesc: string | null;
    subscriptionPrice: number|null;
    merchantReference: string;
    ref: string;
    description: string|null;
    type: string|null;
    recurringOrder: RecurringOrder;
    terminalParams: WorldnetTerminal;
    payType : number | null;
    subscriptionTotalCycles : number;
    lastPaidForCycle: number;
    remarks: string;
    providerId : number | null;
    constructor(){
    }
}

export class SubscriptionRefDetailSearch {
    planId: number|null;
    planDetailId: number|null;
    constructor(){
    }
}

export class RecurringOrder {
    amount: string|null;
    description: string|null;
}

export class DeactivateSubscription {
    terminal: string;
    subscriptionMerchantRef: string;
    subscriptionId : number | null;
    IsActive: boolean;
    updatedBy : number;
    branchId : number;
    updatedOn : Date;
}

