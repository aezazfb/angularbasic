export class OperationItem {
    PatientOperationID: number|null;
    PatientID : number|null;
    ClinicOperationID: number|null;
    ClinicOperationName: number|null;
    Qty: number|null;
    Price: number|null;
    Discount: number|null;
    Comments: string|null;
    OperationDate: Date|null;
    StrOperationDate: string|null;
    userID: number | null;
    PaidDone: boolean | null;
    PaidDate: Date | null
    StatusId: number | null;
    IsSupplied: boolean | null;
    StatusUpdatedOn: Date | null
    SuppliedOn: Date | null
    SupplyDueOn: Date | null
    InvoiceId: number | null; 
    CycleNumber: number | null;
    SubscriptionId: number | null;

constructor(){
    }
}

export class RetrieveOperationScheduleInput{
    fromDate: string|null;
    toDate: string|null;
    branchId: number;
    patientID: number|null;
    companyId: number;
    planId: number|null;
    ordered: boolean|null;
    received: boolean|null;
}

export class OperationScheduleItem{
    patientOperationID: number|null;
    patientID : number|null;
    clinicOperationID: number|null;
    clinicOperationName: number|null;
    qty: number|null;
    price: number|null;
    discount: number|null;
    comments: string|null;
    operationDate: Date|null;
    strOperationDate: string|null;
    userID: number | null;
    paidDone: boolean | null;
    paidDate: Date | null
    statusId: number | null;
    isSupplied: boolean | null;
    statusUpdatedOn: Date | null
    suppliedOn: Date | null
    supplyDueOn: Date | null
    invoiceId: number | null; 
    cycleNumber: number | null;
    subscriptionId: number | null;
    planDesc: string|null;
    ordered: boolean|null;
    received: boolean|null;
    carrier: string|null;
    trackingNumber: string|null;
    treatmentTrackingID: number|null;
    patient: any;
}

export class ClinicOperationTracking{
    treatmentTrackingID: number|null;
    patientOperationID: number|null;
    trackingNumber: string|null;
    carrier: string|null;
    ordered: boolean|null;
    received: boolean|null;
    addby: number|null;
    addOn: Date | null
    updateby: number|null;
    updateOn: Date | null
}

export class AppointmentTypeData{
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