export class ApptSearchParm {
    CompanyID: number | null;
    PatientName: string;
    UserID: number | null;
    FollowupCateID: number | null;
    AllowedBranch:string | null;
    SearchBranchIDs:string | null;
    providerId: number | null;
}


export class ResultParm {
    result: boolean |null;
    data: string | null;
    constructor(rst, message){
      this.result = rst;
      this.data = message;
    }
}
