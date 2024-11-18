export class CreateUpdateReferralSourceDTO {
    sourceId : number;
    name : string | null;
    specialty : string | null;
    address : string | null;
    city : string | null;
    state : string | null;
    zipcode : string | null;
    phone : string | null;
    fax : string | null;
    email : string | null;
    contactPerson : string | null;
    notes  : string | null;
    branchId  : number | null;
    isActive  : boolean | null;
    createdBy   : number | null;
    createDT   : Date | null;
    modifiedBy : number | null;
    modifiedDT : Date | null;
}

export class DeleteReferralSourceDTO {
    sourceId : number;
    branchId : number;
    modifiedBy : number | null;
    modifiedDT : Date | null;
}

export class GetReferralSourceDTO extends CreateUpdateReferralSourceDTO  {
    isDeleted : boolean | null;
    //modifiedBy : number | null;
    //modifiedDT : Date | null;
}