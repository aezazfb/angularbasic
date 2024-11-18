export class SearchClinicOfficeListModel{
    constructor()
    {
        this.companyID = null;
        this.branchID = null;
        this.branchName = null;
        this.branchCode = null;
    }
    companyID: number | null;
    branchID: number | null;
    branchName:string | null;
    branchCode:string | null;
}