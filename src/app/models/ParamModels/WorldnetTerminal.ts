export class WorldnetTerminal {
    terminalId: number;
    branchId: number|null;
    tRefId:string|null;
    checked:boolean;
    terminalDesc:string;
    terminalSecret:string;
    terminalType:string;
    terminalSrNo:string;
    isDeleted:boolean;
}


export class WorldnetTerminalsReq {
    terminalId: number;
    branchId: number|null;
    tRefId:string|null;
    patientID:number;
}