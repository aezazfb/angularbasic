export class PatientQuickSearchParm
{
  firstOrLastName: string;
  contactNo: string;
  companyId: number;
  allowedBranches: string;
  email: string;
  constructor(firstOrLastName, contactNo, companyId, allowedBranches, email){
    this.firstOrLastName = firstOrLastName;
    this.contactNo = contactNo;
    this.companyId = companyId;
    this.allowedBranches = allowedBranches;
    this.email = email;
  }
}