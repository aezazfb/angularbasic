export class UpdateOrderMasterModel {
    orderMasterID: number;
    shippedDate: Date | null;
    gpOrderStatusID: number | null;
    gpOrderTypeID: number | null;
    isInsuranceOnly: boolean | null = false;
    isCashPayment: boolean | null = true;
    companyContactID: number | null;
    updateBy: number | null;
    addBy: number | null;
    gpShippingModeID: number | null;
    gpShippingModeReasonID: number | null;
    employeeID: number | null;
}
