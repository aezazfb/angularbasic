export class FileToUpload {
    fileName: string = "";
    fileDesc: string = "";
    fileActualName: string = "";
    fileExt: string = "";
    fileContentType: string = "";
    fileTags: string = "";
    fileBinaryValue : string = "";
    patientId: number | null;
    BranchID: number | null;
    addOn: Date | null;
    addBy: number | null;
    //patientFile: any | null;
    // fileSize: number = 0;
    // fileType: string = "";
    // lastModifiedTime: number = 0;
    // lastModifiedDate: Date = null;
    // fileAsBase64: string = "";



  
   
       // public byte[] FileBinaryValue { get; set; }


  }
export class ClinicPatientMedicalHistoryFileModal {
    fileId: number;
    fileName: string;
    fileDesc: string;
    fileActualName: string;
    fileBinaryValue: string;
    fileExt: string;
    fileContentType: string;
    fileTags: string;
    patientId: number | null;
    isDeleted: boolean;
    isActive: boolean;
    addOn: string | null;
    addBy: number | null;
    addByUser: string;
    updatedOn: string | null;
    updatedBy: number | null;
    debugIdentifier: string;
    filePath: string;
}