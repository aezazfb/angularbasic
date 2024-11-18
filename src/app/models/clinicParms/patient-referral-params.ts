import { ClinicPatientList } from "./clinic-patient-list";

export class GetClinicPatientReferralparam {
    referralID: number;
    referrerPatientID: number;
    referredPatientID: number;
    status: string;
    branchId: number;
    referralDate: string;
    isActive: boolean;
    constructor(referrerPatientID, referredPatientID){
        this.referrerPatientID = referrerPatientID;
        this.referredPatientID = referredPatientID;
    }
}

export class GetClinicPatientReferralDTO {
    referralID: number;
    referrerPatientID: number;
    referredPatientID: number;
    branchId: number;
    referralDate: string;
    status: string;
    referrerDiscountAmount: number;
    referredDiscountAmount: number;
    remainingReferrerDiscount: number;
    remainingReferredDiscount: number;
    referrerDiscountUsed: boolean;
    referredDiscountUsed: boolean;
    referrerDiscountUsedDate: string | null;
    referredDiscountUsedDate: string | null;
    createdOn: string;
    createdBy: number;
    modifiedOn: string;
    modifiedBy: number;
    isDeleted: boolean;
    referrerPatient: ClinicPatientList;
    referredPatient: ClinicPatientList;
}

export class CreateClinicPatientReferralDTO {
    referrerPatientID: number;
    referredPatientID: number;
    branchId: number;
    status: string;
    referrerDiscountAmount: number;
    referredDiscountAmount: number;
    createdBy: number;
}

export class UpdateClinicPatientReferralDTO {
    referralID: number;
    branchId: number;
    status: string;
    referrerDiscountUsed: boolean;
    referredDiscountUsed: boolean;
    referrerDiscountUsedDate: Date | null;
    referredDiscountUsedDate: Date | null;
    modifiedBy: number;
}

export class DeleteClinicPatientReferralDTO {
    referralID: number;
    modifiedBy: number;
}

export class CalculatePatientReferralsDTO {
    patientName: string;
    totalReferrerAmount: number;
    consumedReferrerAmount: number;
    remainingReferrerAmount: number;
    totalReferredAmount: number;
    consumedReferredAmount: number;
    remainingReferredAmount: number;
}

export class CalculatePatientReferralsParamDTO {
    patientId: number | null;
    branchId: number;
}