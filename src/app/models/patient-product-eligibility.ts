export class PatientProductEligibility {
    patientID : number;
    productID : number;
    allowedQuantity : number;
    productName : string;
    productCategoryName : string;
    gPProductTypeID : number;
    productCode : string;
    scheduledFollowupDate : Date;
    nextAssumeddate : Date | null;
    cycleUnit : string;
    cyclePeriod : number | null;
    inactive : number;
    calAllowedQty : number;
    dailyQty : number;
    followupCategoryID : number;
    evoPartNumber : string;
    productCategoryID : number;
    filled : boolean;
    lastOrderDate : Date | null;
}
