export class InsertPatientInsuranceDetail {

    PatientInsuranceDetailID: number;
    PatientID: number;
    InsuranceCompanyID: number;
    InsuranceCompanyName: string;
    GroupName: string;
    PolicyNumber: string;
    EffectiveDate: Date;
    EffectiveDateAlt: Date;
    InsuranceType: number;
    InsuranceTypeName: string;
    Deactivated: boolean;
    AddBy: number;
    AddOn: Date;
    AddTerminal: string;
    Is_Deleted: boolean;
    ExpirationDate: Date;

}
