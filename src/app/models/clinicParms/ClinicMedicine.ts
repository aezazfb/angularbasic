import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ClinicMedicineRef {
    ClinicMedicineRefID: number;
    BranchID: number;
    ClinicMedicineName: string;
    ClinicMedicineRefGroupID: number;
    FormRef: string;
    IsDeleted: boolean;
    IsActive: boolean;
    UserID: number;
    CompanyID: number;
    ClinicSpecific: boolean;
    Abbrev:string;
    Sequence:number;
    MedGroupIndex:number;
    ExpectedSequence:number;
}

export class ClinicMedicineRefGroup {
    ClinicMedicineGroupID: number;
    ClinicMedicineGroup: string;
    FormGroupRef: string;
    IsDeleted: boolean;
    IsActive: boolean;
    UserID: number;
    CompanyID: number;
    Abbrev: string;
}

export class ClinicGroupedMedicineRef {
    clinicMedicineRefGrp: ClinicMedicineRefGroup;
    clinicMedicineRefs: ClinicMedicineRef[];
}

export class ClinicMedicineRefGrpMatch {
    clinicMedicineRefGrp: ClinicMedicineRefGroup;
    clinicMedicineRefMatch: ClinicMedicineRefMatch[];
}

export class ClinicMedicineRefMatch {
    clinicMedicineRef: ClinicMedicineRef;
    clinicMedicine: ClinicMedicine;
}

export class ClinicMedicine {
    ClinicMedicineID: number|null;
    ClinicMedicineRefID: number;
    BranchID: number;
    IsDeleted: boolean;
    IsActive: boolean;
    UserID: number;
}

export class HPFormClinicMedicine {
    ClinicMedicineGroupID: number;
    ClinicMedicineGroup: string;
    FormGroupRef: string;
    ClinicMedicineRefID: number;
    FormRef: string;
    ClinicMedicineName: string;
    IsActive: boolean;
}

export interface ClinicMedicineResult {
    ClinicMedicineRefID: number;
    Result: boolean;
    Message: string;
  }

  export class HPFormClinicMedicineSPec {
    ClinicMedicineGroupID: number;
    ClinicMedicineGroup: string;
    FormGroupRef: string;
    ClinicMedicineRefID: number;
    FormRef: string;
    ClinicMedicineName: string;
    IsActive: boolean;
    MdRefIsActive:boolean;
    Abbrev:string;
    MdGroupRefIsActive:boolean;
}