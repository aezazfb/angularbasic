export class GetPaymentInvoiceParam {
    invoiceId: number | null;
    retref: string;
    branchId: number | null;
}


export class RefundWorldNetParam {
    paymentUniqueRef: string;
    refundAmount: number;
    refundReason: string;
    invoiceId: number;
    netAmount: number;
    branchId: number;
    updatedBy: number;
    updatedOn: Date;
    returnType: string;
}
export class GetPatientPaymentsApiParam {
    invoiceId: number | null;
    patientID: number | null;
    subscriptionId: number | null;
    acctid: string | null;
    profileId: string | null;
    retref: string | null;
    branchId: number | null;
}