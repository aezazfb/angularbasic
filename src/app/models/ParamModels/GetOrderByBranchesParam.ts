export class GetOrderByBranchesParam {
    PatientID : number;
    CompanyID: number;
    CampaignID: number;
    AllowedBranch: string;
    IncludeAutoShip: boolean;
    IncludeCancelled: boolean;
    IncludeClosed: boolean;
    IncludePending: boolean;
    IncludePendingDelivery: boolean;
    IncludeShipped: boolean;
    IsMedicare: boolean;
    From: string;
    To: string;
    IncludeOffset: boolean;
    OffSetRows: number | null;
    NextRows: number | null;
    CompanyContactID : string | null;
    AddBy : number | null;
    BranchID : string | null;
    Name : string | null;
    sortExpression :string |null; 
}
