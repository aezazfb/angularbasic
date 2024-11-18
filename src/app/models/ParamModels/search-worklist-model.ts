export class SeachWorklistModel {
    constructor()
    {
        this.patientProgramID = "";
        this.firstName = "";
        this.lastName = "";
        this.gPAssignmentID = null;
        this.companyID = null;
        this.sortExpression = "NextCallDate";
        this.isDive = false;
        this.currentDue = true;
        this.futureDue = false;
        this.passedDue = true;
        this.patientID = null;
        this.worklistMode = null;
        this.mrn = null;
        this.surveyID = null;
        this.offset = null;
        this.nextRows = null;
    }

    patientProgramID: string | null;
    firstName: string | null;
    lastName: string | null;
    gPAssignmentID: number | null;
    companyID: number | null;
    sortExpression:string | null;
    isDive:boolean | null;
    futureDue:boolean | null;
    currentDue:boolean | null;
    passedDue:boolean | null;
    patientID:number | null;
    worklistMode:boolean | null;
    mrn:string | null;
    surveyID:number | null;
    offset:number | null;
    nextRows:number | null;
}
