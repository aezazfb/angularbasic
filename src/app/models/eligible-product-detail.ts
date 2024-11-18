export class EligibleProductDetail {
    productID: number;
    hcpcCode:string;
    productName:string;
    productFullName:string;
    productFullDescription:string;
    productTypeID:number|null;
    productType:string;
    productCategoryID:number|null;
    productCategoryName:string; 
    orderDate;
    quantity:number|null;
    gpCateID:number;
    evoPartNumber:string;
    allowedQuantity :number|null;
    remainedQuantityStr:string;
    scheduledFollowupDate: Date|null; 
    filled:boolean;
    productFlag:string;
    gPProductTypeID:number|null
    productCode:string
    cycleUnit:string
    cyclePeriod:string
    inactive:number
}
