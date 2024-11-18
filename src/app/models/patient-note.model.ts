export class PatientNote {
    ExceptRecordCounts: bigint;
    PatientRecordCounts: bigint;
    recordNum: bigint;
    PatientNotesDetailID: bigint;
    PatientID: bigint;
    PatientName: string;
    MRN: string;
    InActive: boolean;
    CreationDateTime: bigint;
    SubjectID: bigint;
    Subject: string;
    BranchID: bigint;
    BranchName: string;
    Notes: string;
    Source: string;
    NoteSource: number;
    IsResolved: boolean;
    PatientInactive: boolean;
    ResolvedBy: string;
    GPSubjectID: number;
    LastName: string;
    campaign: string;
    Location: string;
    IsVisibleRemoveAlert: boolean;
    IsVisibleAlertStatus: boolean;
    IsVisibleRemoveException: boolean;
    IsVisibleExceptionStatus: boolean;
    ProductID: string;
    ProductName: string;
    EvoPartNumber: string;
}
