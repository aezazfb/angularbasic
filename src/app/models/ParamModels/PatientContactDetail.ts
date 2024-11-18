export class PatientContactDetail {
    PatientContactDetailID: number;
    PatientID: number;
    TimeZoneID: number | null;
    TimeZoneName: string;
    ContactNumber: string;
    ContactTypeID: number;
    GPContactTypeID: number;
    ContactTypeName: string;
    IsPrimaryContact: number;
    Extension: string;
    Email: string;
    PrefferedNumber: string;
    CallTimeFrom: Date;
    CallTimeTo: Date;
    GPContactMethodID: number;
    GPTimeZoneID: number;
    AddBy: number;
    AddOn: Date;
    UpdateBy: number;
    UpdateOn: Date;
    AddTerminal: string;
    UpdateTerminal: string;
    Is_Deleted: number;
    Comments: string;

}
