export class PaymentHistoryItem{
  patientID: number;
  paymentProfileId: string;
  acctId: string;
  retref: string;
  amount: number;
  paidAgainst: string;
  status: string;
  addby: number;
  addByUser: string;
  invoiceDate: string;
  updatedBy: number|null;
  addOn: string;
  updatedOn: string|null;
  jsonResponse: string|null;
  subscriptionName : string;
  paymentMode : string;
  maskedCardNumber : string;
  paymentDetails:  PaymentDetail[];
  patient: {
    patientID: number;
    firstName: string;
    lastName: string;
    middleName: string;
    genderID: number;
    gpGenderID: number;
    gender: string;
    languageID: number;
    languageName: string;
    dateOfBirth: string;
    mrn: string;
    email: string;
    inActive: boolean;
    company: {
      companyID: number;
      companyName: string
    };
    branch: {
      branchID: number;
      branchName: string
      npi: string;
      merchantID: string;
      paymentGateway: string
    };
    patientMode: {
      patientModeID: number;
      patientModeName: string
    };
    address: [
      {
        patientAddressID: number;
        addressFull: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        stateID: number;
        stateName: string;
        countryID: number;
        countryName: string;
        zipCode: string;
        alternateAddressFull: string;
        alternateAddressLine1: string;
        alternateAddressLine2: string;
        alternateAddressLine3: string;
        alternateCity: string;
        alternateStateID: number;
        alternateStateName: string;
        alternateCountryID: number;
        alternateCountryName: string;
        alternateZipCode: string
      }
    ];
    contactDetail: [
      {
        patientID: number;
        contactNumber: string
      }
    ];
    insurances: [];
    primaryContactNumber: string;
    isDive: boolean,
    physicianNPI,
  };
}
export class PaymentFutureItem{
  patientID: number;
  paymentProfileId: string;
  acctId: string;
  retref: string;
  amount: number;
  paidAgainst: string;
  status: string;
  addby: number;
  updatedBy: number|null;
  addOn: string;
  updatedOn: string|null;
  jsonResponse: string|null;
  subscriptionName : string;
  paymentMode : string;
  maskedCardNumber : string
}
export class RetrievePaymentRequestInput{
  patientID: number;
  profileId: string|null;
  acctid: string|null;
  retref: string|null;
  branchId: number;
}
export class PaymentDetail{
  paymentDetailId: number;
  acctId: string|null;
  retref: string|null;
  amount: number;
  itemPrice: number;
  taxAmount: number;
  taxRate: number;
  totalTax: number;
  discount: number;
  quantity: number;
  taxCode: string;
  isProductPayment: boolean;
  paidAgainst: string;
  invoiceId: number;
  status: number;
  addby: number;
  subscriptionCycle: number;
  updatedBy: number|null;
  addOn: Date;
  updatedOn: Date|null;
  externalDiscount: number;
  discountType: string;
  discountCode: string;
}

export class PaymentHistoryReportItemA{
  firstName: string;
  lastName: string;
  middleName: string;
  DOB: string;
  patientID: number;
  paymentProfileId: string;
  acctId: string;
  retref: string;
  amount: number;
  paidAgainst: string;
  status: string;
  addby: number;
  updatedBy: number|null;
  addOn: string;
  updatedOn: string|null;
  jsonResponse: string|null;
}

export class PaymentFutureReportItem	{
  paymentDetailId: number;
  paymentProfileId: string;
  acctId: string;
  retref: string;
  amount: number;
  paidAgainst: string;
  invoiceId: number;
  status: string;
  addby: number;
  addbyName: string;
  updatedBy: number;
  addOn: string;
  updatedOn: Date;
  invoiceDate: string;
  patientID: number;
  paymentTag: string;
  paymentMode: string;
  maskedCardNumber: string;
  subscriptionId:number;
  subscriptionName:string;
  patient: {
    patientID: number;
    firstName: string;
    lastName: string;
    middleName: string;
    genderID: number;
    gpGenderID: number;
    gender: string;
    languageID: number;
    languageName: string;
    dateOfBirth: string;
    mrn: string;
    email: string;
    inActive: boolean;
    company: {
      companyID: number;
      companyName: string
    };
    branch: {
      branchID: number;
      branchName: string
      npi: string;
      merchantID: string;
      paymentGateway: string
    };
    patientMode: {
      patientModeID: number;
      patientModeName: string
    };
    address: [
      {
        patientAddressID: number;
        addressFull: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        stateID: number;
        stateName: string;
        countryID: number;
        countryName: string;
        zipCode: string;
        alternateAddressFull: string;
        alternateAddressLine1: string;
        alternateAddressLine2: string;
        alternateAddressLine3: string;
        alternateCity: string;
        alternateStateID: number;
        alternateStateName: string;
        alternateCountryID: number;
        alternateCountryName: string;
        alternateZipCode: string
      }
    ];
    contactDetail: [
      {
        patientID: number;
        contactNumber: string
      }
    ];
    insurances: [];
    primaryContactNumber: string;
    isDive: boolean,
    physicianNPI,
  };
  details: [];
  paymentDetails:  PaymentDetail[];
  patientSubscription:  {
    subscriptionId:number|null;
    patientId:number|null;
    branchId:number|null;
    planId: number|null;
    planMerchantRef:  string;
    startDate: Date|null;
    stopDate: Date|null;
    renewedOn: Date|null;
    credentialsNumber: string
    subscriptionStatus:number|null;
    isActive:boolean|null;
    StrStartDate: string;
    StrStopDate: string;
    StrRenewedOn: string;
    planPriceInDollars: number;
    planDesc: string | null;
    subscriptionPrice: number|null;
    merchantReference: string|null;
    description: string|null;
    type: string|null;
    subscriptionTotalCycles : number;
  };
  nextPaymentDate: Date;
  subscriptionPrice: number|null;
}
export class PaymentHistoryReportItem	{
  paymentDetailId: number;
  paymentProfileId: string;
  acctId: string;
  retref: string;
  amount: number;
  paidAgainst: string;
  invoiceId: number;
  status: string;
  addby: number;
  addbyName: string;
  updatedBy: number;
  addOn: string;
  updatedOn: Date;
  invoiceDate: string;
  invoiceStatus: string;
  patientID: number;
  paymentTag: string;
  paymentMode: string;
  maskedCardNumber: string;
  subscriptionId:number;
  isReversible: boolean;
  subscriptionName:string;
  patient: {
    patientID: number;
    firstName: string;
    lastName: string;
    middleName: string;
    genderID: number;
    gpGenderID: number;
    gender: string;
    languageID: number;
    languageName: string;
    dateOfBirth: string;
    mrn: string;
    email: string;
    inActive: boolean;
    company: {
      companyID: number;
      companyName: string
    };
    branch: {
      branchID: number;
      branchName: string
      npi: string;
      merchantID: string;
      paymentGateway: string
    };
    patientMode: {
      patientModeID: number;
      patientModeName: string
    };
    address: [
      {
        patientAddressID: number;
        addressFull: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        city: string;
        stateID: number;
        stateName: string;
        countryID: number;
        countryName: string;
        zipCode: string;
        alternateAddressFull: string;
        alternateAddressLine1: string;
        alternateAddressLine2: string;
        alternateAddressLine3: string;
        alternateCity: string;
        alternateStateID: number;
        alternateStateName: string;
        alternateCountryID: number;
        alternateCountryName: string;
        alternateZipCode: string
      }
    ];
    contactDetail: [
      {
        patientID: number;
        contactNumber: string
      }
    ];
    insurances: [];
    primaryContactNumber: string;
    isDive: boolean,
    physicianNPI,
  };
  details: [];
  paymentDetails:  PaymentDetail[];
  patientSubscription:  {
    subscriptionId:number|null;
    patientId:number|null;
    branchId:number|null;
    planId: number|null;
    planMerchantRef:  string;
    startDate: Date|null;
    stopDate: Date|null;
    renewedOn: Date|null;
    credentialsNumber: string
    subscriptionStatus:number|null;
    isActive:boolean|null;
    StrStartDate: string;
    StrStopDate: string;
    StrRenewedOn: string;
    planPriceInDollars: number;
    planDesc: string | null;
    subscriptionPrice: number|null;
    merchantReference: string|null;
    description: string|null;
    type: string|null;
    subscriptionTotalCycles : number;
  };
}

export class RetrievePaymentReportInput{
  fromDate: string|null;
  toDate: string|null;
  branchId: number;
}

export class RetrieveFuturePaymentReportInput{
  companyId: number;
  branchId: number;
  paymentGateway: string;
  paymentDueDate: string;
}