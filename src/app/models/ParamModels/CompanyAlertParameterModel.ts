export class CompanyAlertParameterModel {
    
    PatientNotesDetailID: number;
    CompanyID: number | null;
    BranchID: number | null;
    PatientID: number | null;
    IncludeResolved: boolean | null;
    IncludeInActivePatient: boolean | null;
    GPSubjectID: number | null;
    PatientName: string;
    UserID: number | null;
    FollowupCateID: number | null;
    SortExpression: string;
    ResolvedBy: number | null;
    OffSetRows: number;
    NextRows: number;
    IncludeOffset: boolean | false;
    AllowedBranch:string | null;
}

