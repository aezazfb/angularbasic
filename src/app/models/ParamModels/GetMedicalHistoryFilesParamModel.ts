export class GetMedicalHistoryFilesParamModel {
      CompanyID : number;
     BranchId : number | null;
     PatientId :  number;
    
}

export class DeleteFileParamModel {
      FileId : number;
      UpdatedBy : number | null;
      filePath : string | null;
}
 