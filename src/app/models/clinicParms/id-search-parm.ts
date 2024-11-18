export class PatientIDModel{
    constructor()
    {
        this.patientID = null;
        this.subscriptionId = null;
        this.profileID = null;
        this.paymentGateway = null;
    }
    patientID: number | null;
    subscriptionId : number | null;
    profileID : number | null;
    paymentGateway : string;
}

export class CompanyIDModel{
    constructor()
    {
        this.companyID = null;
        this.branchId = null;
    }
    companyID: number | null;
    branchId: number | null;
    
}