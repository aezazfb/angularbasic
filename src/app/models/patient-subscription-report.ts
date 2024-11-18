
export class ClinicPatientSubscriptionReport {
    subscriptionId: number;
    patientId: number;
    planId: number;
    firstName: string;
    lastName: string;
    contactNumbers: string;
    email: string;
    branchName: string;
    planDesc: string;
    planIsActive: boolean;  
    SubscriptionIsActive: boolean;
    startDate: string;
    stopDate: string;
    dateOfBirth: string;
    subscriptionStatus: string;
    subscriptionPrice: number;
    subscriptionIsActive: boolean;
    lastPaidTotalAmount: number; 
    addOn: string;
    updatedOn: string;
    updatedBy: number;
    isActive: boolean;
    subscriptionTotalCycles: number | null;
    lastPaidInvoiceId: number | null;
    lastPaidForCycle: number | null;
    lastPaidInvoiceDate: string | null;
    daysPerInterval: number;
}