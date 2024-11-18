export class SaveFollowup {
    addedBy: number | null;
    source: string | null;
    patientID: number | null;
    followupCateID: number | null;
    followUpRuleID: number | null;
    reasonCode: number | null;
    companyID: number | null;
    surveyID: number = 0;
    languageID: number | null;
    assignmentID: number | null;
    cycleCompleted: boolean = false;
    noteSubjectID: number | null;
    noteDesc: string | null;
    callFrom: string | null;
}
