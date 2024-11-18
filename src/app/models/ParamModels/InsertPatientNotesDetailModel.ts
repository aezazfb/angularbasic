export class InsertPatientNotesDetailModel {
    FollowupRuleID: number;
    FollowupSurveyType: string;
    surveyID: number | null;
    SourceMethod: string;
    PatientID: number;
    GPSubjectID: number;
    ObjectType: string;
    ObjectID: number | null;
    IsFollowUp: boolean;
    IsPrivate: boolean;
    IsLimitedView: boolean;
    IsResolved: boolean;
    Reminder: Date;
    Creation: Date;
    Author: string;
    Notes: string;
    Resolution: string;
    AddBy: number;
    AddOn: Date;
    AddTerminal: string;
    Is_Deleted: boolean;
    ReminderDateTime: Date;
    CreationDateTime: Date;
}
