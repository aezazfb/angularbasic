export class CreateUpdateClinicDiscountCouponDTO {
    code: string | null;
    discountAmount: number | null;
    expiryDate: string | null;
    branchId: number | null;
    isActive: boolean | null;
    createdOn: Date | null;
    createdBy: number | null;
    couponID: number | null;
    modifiedOn: Date | null;
    modifiedBy: number | null;
}

export class DeleteClinicDiscountCouponDTO {
    couponID: number | null;
    modifiedOn: Date | null;
    modifiedBy: number | null;
}

export class GetClinicDiscountCouponDTO {
    couponID: number | null;
    code: string | null;
    branchId: number | null;
    expiryDate: string | null;
    discountAmount: number | null;
    isActive: boolean | null;
    createdOn: Date | null;
    createdBy: number | null;
    modifiedOn: Date | null;
    modifiedBy: number | null;
}