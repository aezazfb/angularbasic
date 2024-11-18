export class ProductTypeParam{
    TypeID: number|null;
    BranchID: number|null;
    TypeName: string|null;
    TypeDesc: string|null;
    TypeCode: string|null;
    IsActive: boolean|null;
    IsDeleted: boolean|null;
    addby: number|null;
    addOn: Date | null;
    updateby: number|null;
    updateOn: Date | null;
    UserId: number|null;
}

export class ProductParam{
    productId: number;
    productName: string;
    productCode: string;
    productDescription: string;
    productTypeID: number;
    manufacturer: string;
    price: number;
    cost: number;
    quantity: number;
    subTotal: number;
    isTaxable: boolean;
    taxCode: string;
    taxRate: number;
    taxAmount: number;
    companyID: number | null;
    isDiscontinued: boolean;
    isDefault: boolean;
    isDeleted: boolean;
    addOn: string;
    addBy: number;
    updateOn: string;
    updateBy: number;
    branchId: number;
}
