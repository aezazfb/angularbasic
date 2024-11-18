export class SpecificForm {
    Name: string;
    Desp: string;
    IncludedAsDefault: boolean;
    Picked: boolean;
    constructor(name:string, desp:string, picked:boolean, includedAsDefault:boolean){
      this.Name = name;
      this.Desp = desp;
      this.Picked = picked;
      this.IncludedAsDefault = includedAsDefault;
    }
  }