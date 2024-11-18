export class ReportPatientInfo {

    setupDate: Date;
    nextCallDate: Date;
    followUpDate: Date;
    patientID: number;
    mrn: number;
    firstName: string;
    lastName: string;
    middleName: string;
    dob: Date;
    email: string;
    contactNumber: string;
    contactMode: string;
    campaign: string;
    insurancetype: string;
    patientStatus: string;
    ruleStatus: string;
    oPTOUT: string;
    contactHistoryStatus: string;
}
export class ReportPatientSubscription
{
    totalPatients: number;
    planDesc: string;
}
export class ClinicDashboardModel
{
    dataDesc: string;
    totaldata: number;
    dataHead: string;
}
