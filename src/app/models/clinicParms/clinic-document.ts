export class ClinicDocument {
    PatientDocumentID:number|null;
    PatientID:number |null;
    BranchID: number | null;
    BranchName: string | null;
    DocType: string|null;
    PSignature: string | null;
    FormContent: string | null;
    UserID: number|null;
    AddOn: Date|null;
    SendToEmail: string | null;
    SignedEmail: string | null;
    FormTemplateID: number | null;
    constructor(){
    }
}

export class PhysicianEmailInput {
    PatientID:number |null;
    PhysicianEmail : string | null;
    BranchName: string | null;
    BranchEmail: string | null;
    BranchID: number | null;
    DocFrom: string | null;
    DocTo: string | null;
}

export class PatientEmailInput {
    PatientID:number |null;
    PatientEmail : string | null;
    BranchName: string | null;
    BranchEmail: string | null;
    BranchID: number | null;
    DocFrom: string | null;
    DocTo: string | null;
    AdditionalForm:string | null;
}

//For form template specific data
export class SearchClinicFormData {
    BranchID: number | null;
    FormName: string | null;
}
//For form template specific data
export class ClinicFormData {
    BranchFormID: number | null;
    BranchID: number | null;
    FormName: string | null;
    TemplateData:string |null;
    AddOn: Date|null;
    Addby: number|null;
    UpdateOn: Date|null;
    UpdateBy: number|null;
}