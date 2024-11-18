import { Byte } from "@angular/compiler/src/util";

export class ClinicSupportParams
{
    CompanyID:number;
    Search: string;
    OffSetRows: number | null; 
    NextRows: number | null; 
    AddBy: number | null;
    branchID: number | null; 
}

export class ClinicSupport
{  
    queryID: number | null;
    subject: string;  
    description: string;  
    reasonID: number | null;  
    companyID: number | null;
    branchID: number | null;  
    employeeID: number | null;   
    status_ID: number | null;   
    supportImage: string;  
    addBy: number | null;  
    dateTime: Date; 
    addTerminal: string;  
    updateBy: number | null;  
    updateOn: Date;  
    updateTerminal: string;  
    is_Deleted: number | null;  
    isApproved: number | null;  
    approvedBy: number | null;   
    comments: string;  
    status: string;  
    addByFullName: string;  
    userName: string;  
    problem: string;  
    fileContent: Byte []; 
    supportImageName: string;  
    linkUrl: string;  
    resolvedBy: string;  
    offSetRows: number | null;  
    nextRows: number | null;  
    sortExpression: string;  
    exceptRecordCounts: number | null;  
    patientRecordCounts: number | null;  
    search: string;  
    isDevCommentCheck: boolean;
    isStatusCheck: boolean;
    branchName: string; 
}

export class SupportTeam
{
    
    id: number | null;
    fullName: string;
    fatherName: string;
    email: string;
    contactNo: string;
    level: number | null;
    isDeleted: boolean;
    isActive: boolean;

}
export class UpdateSupportQueryStatus {
    queryID: number | null;
    status_ID: number | null;
}