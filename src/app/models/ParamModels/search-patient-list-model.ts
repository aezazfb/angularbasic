export class SeachPatientListModel {
    constructor()
    {
        this.patientID = null;
        this.companyID = null;
        this.branchID = null;
        this.followUpCatID = null;
        this.firstName = null;
        this.lastName = null;
        this.mrn = null;
        this.gpPatientClassID = null;
        this.gpPatientModeID = null;
        this.payerType = null;
        this.contactNumber = null;
        this.offset = null;
        this.nextRows = null;
        this.totalNum = null;
        this.allowedBranches = null;
        this.payerTypeID = null;
    }

    patientID: number | null;
    companyID: number | null;
    branchID: number | null;
    followUpCatID: number | null;
    patientStatusID: string | null;
    firstName:string | null;
    lastName:string | null;
    mrn:string | null;
    gpPatientClassID:number | null;
    gpPatientModeID:number | null;
    payerType:number | null;
    contactNumber:string | null;
    offset:number | null;
    nextRows:number | null;
    totalNum:number | null;
    payerTypeID:number | null;
    allowedBranches:string | null;

   
    middleName: string;
    dateOfBirth: string | null;
    mRN: string;
    companyName: string;
    branchName: string;
    setupDate: string | null;
    gPAssignmentID: number;
    gPPatientClassID: number | null;
    addOn: string | null;
    nextCall: string | null;
    remainOnLiveCall: number;
    gPPatientModeID: number | null;
    gPPatientProgramID: number;
    inActive: boolean | null;   
    patientMode: string;
    surveyName: string;  
    isMedicare: boolean;
    isactive: boolean;   
    sortExpression: string;
    multiCampaign: number;
    
}

