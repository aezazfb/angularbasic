export class Product {
    productID:            number;
    parentProductID:      number | null;
    productCode:          string | null;
    productName:          string | null;
    productDescription:   string | null;
    gpProductTypeID:      number | null;
    manufacturerID:       number | null;
    allowable:            boolean | null;
    evoPartNumber:        string | null;
    deviceID:             number | null;
    imItemNumber:         string | null;
    companyID:            number | null;
    isDefault:            boolean | null;
    isDiscontinued:       boolean | null;
    comments:             string | null;
    isDeleted:            boolean | null;
    addOn:                Date | null;
    addBy:                number | null;
    updateOn:             Date | null;
    updateBy:             number | null;
    productCMBCategoryID: number | null;
    productTTSID:         number | null;
}
