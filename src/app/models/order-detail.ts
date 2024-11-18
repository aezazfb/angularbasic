export class OrderDetail {
   
      orderDetailID : number;
      orderMasterID : number;
      interfaceSize : number | null;
      gpProductTypeID : number | null;
      parentProductID : number | null;
      productCategoryID : number | null;
      productType : string;
      parentProductTypeID : number | null;
      productID: number | null;
      productName : string;
      updateBy : number | null;
      gpCateID : number | null;
      remainedQuantity: number | null;
      allowedQuantity : number | null;
      productCode : string;
      remainedQuantityStr : string;
      productCategoryName : string;
      companyID : number;
      productTTSContent : string;
      productNameWithDescription : string;
      parentProductName : string;
      evoPartNumber: string;
      isDropShip : boolean;
      comments : string;
      orderDate : Date | null;
      amount : number | null; 
      quantity : number | null;
      interfaceSizeID : number | null;
      interfaceSizeName : string;
      includeInOrder : boolean = true;
      includePending : boolean;
      action : string;

}
