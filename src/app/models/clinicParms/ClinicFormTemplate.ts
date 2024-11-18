export class ClinicFormTemplate {
    ClinicFormTemplateID:number|null; 
    ClinicFormTemplateName: string | null;   
    BranchID: number | null;
    BranchName: string | null;
    CompanyID: number | null;
    DocType: string|null;    
    FormContent: string | null;
    UserID: number| null;
    AddOn: Date|null;
    UpdateOn: Date | null;
    //Add UpdateBy ????
    UpdateBy: number | null;
    Is_deleted: boolean | null;
    IsActive: boolean | null;
    IsDefault: boolean | null;
    ClinicSpecified: boolean | null;

    constructor(){
    }
}