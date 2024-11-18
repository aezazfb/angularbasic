export class CreateUpdateProviderDTO {
    providerId : number;
    name : string | null;
    specialty : string | null;
    address : string | null;
    city : string | null;
    state : number | null;
    zipcode : string | null;
    phone : string | null;
    fax : string | null;
    email : string | null;
    scheduleObj : string | null;
    telehealthLink : string | null;
    npi : string | null;
    notes  : string | null;
    branchId  : number | null;
    isActive  : boolean | null;
    createdBy   : number | null;
    createDT   : Date | null;
    modifiedBy : number | null;
    modifiedDT : Date | null;
}

export class DeleteProviderDTO {
    providerId : number;
    branchId : number;
    modifiedBy : number | null;
    modifiedDT : Date | null;
}

export class GetProviderDTO extends CreateUpdateProviderDTO  {
    isDeleted : boolean | null;
    //modifiedBy : number | null;
    //modifiedDT : Date | null;
}
export class ClinicProviderParamModel {
    branchId: number;
    isActive: boolean | null;
    name: string;
    nPI: string;
}