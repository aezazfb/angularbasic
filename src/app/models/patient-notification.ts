export class PatientNotification {
    patientNotificationDetailID:number;
    patientID:number;
    patientName:string;
    allowNotification:boolean;
    gpNotifyTypeID:number;
    gpNotifyType:string;
    addBy:number;
    addOn:Date;
    addTerminal:string;
    updateBy:string;
    updateOn:Date;
    updateTerminal:string;
}

export class PatientNotificationParamModel {
    patientNotificationDetailID:number;
    patientID:number;
    gPNotifyTypeID:number;
    branchID:number;
}