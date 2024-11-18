import { PayrocPaymentRequest } from "../ParamModels/PayrocParam";
import { ProductParam } from "./ProductTypeParam";
import { CreateClinicPatientReferralDTO, UpdateClinicPatientReferralDTO } from "./patient-referral-params";

export class CardProfileRequest{
  patientID : number;
  merchid : string;
  account : string;
  currency : string;
  expiry : string;
  name : string;
  address : string;
  region : string;
  country : string;
  city : string;
  postal : string;
}

export class CardProfileRequestInput{
  profileID : string;
  patientID : number;
  account : string;
  currency : string;
  mm : string;
  yy : string;
  cvv : string;
  firstName : string;
  lastName : string;
  address : string;
  region : string;
  country : string;
  city : string;
  postal : string;
  branchId: number;
}

export class CardProfileUpdateRequestInput{
  patientID : number;
  merchid : string;
  account : string;
  profile : string;
  profileid : string;
  acctid : string;
  currency : string;
  mm : string;
  yy : string;
  firstName : string;
  lastName : string;
  address : string;
  region : string;
  country : string;
  city : string;
  postal : string;
  token:string;
  branchId: number;
}

export class RetrieveCardProfileRequestInput{
  profileid : string;
  merchid : string;
  accountid : string;
}

export class DirectPayRequestInput{
  merchid : string;
  account : string;
  expiry : string;
  amount: string;
  cvv2 : string;
}


export class PayWithProfileRequestInput{
  patientID: number;
  subscriptionId: number;
  profileid : string;
  acctid: string;
  currency : string;
  amount : string;
  paidAgainst : string;
  addedBy:number;
  merchantid:string;
  branchId:number;
}

export class InquireByRetrefInput{
  retref: string;
  merchid: string;
}

export class CardProfile{
  patientID: number;
  country:  string ;
  gsacard:  string ;
  address:  string;
  resptext: string | null;
  city:  string;
  acctid: string;
  respcode: string|null;
  defaultacct: string ;
  accttype: string|null;
  token:  string;
  respproc: null;
  profileid:  string;
  name:  string;
  auoptout: string;
  postal: string;
  expiry: string;
  region: string;
  respstat: null;
  cofpermission: string|null;
}

export class CardProfileByPatientReq{
  patientID: number;
  profileid: string|null;
  acctid: string|null;
}

export class CardProfileAccountDeleteReq
{
  patientID: number;
  profileId: string|null;
  acctid: string|null;
}
//WorldNet Part
export class WorldnetCardProfileByPatientReq{
  patientID: number;
  cardReference: string|null;
  merchantRef: string|null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  countryCode: string | null;
  state: string | null;
  zipcode: string | null;
}

export class WorldCardProfile{
  id: number;
  patientID: number;
  cardReference: string | null;
  cardExpiry: string | null;
  cardHolderName: string | null;
  cardType: string | null;
  hash: string | null;
  maskedCardNumber: string | null;
  merchantRef: string | null;
  defaultacct: boolean|null;
  isDeleted: boolean|null;
  updatedBy: number|null;
  updatedOn: string | null;
  addedBy: number|null;
  addedByUser: string|null;
  addOn: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  countryCode: string | null;
  state: string | null;
  zipcode: string | null;
  primaryAddress: string | null;
  primaryCity: string | null;
  primaryState: string | null;
  primaryCountry: string | null;
  primaryZipcode: string | null;
}

export class WorldnetCardProfileAccountDeleteReq
{
  patientID: number;
  cardReference: string|null;
  merchantRef: string|null;
  updatedBy: number|null;
  updatedOn: string| null;
}
// export class WorldnetPayReq
// {
//   patientID: number;
//   subscriptionId: number;
//   channel: string|null;
//   terminal: string|null;
//   paidAgainst: string|null;
//   addedBy: number;
//   order: WorldnetPayOrder;
//   customerAccount : WorldnetPayCustomerAccount;
//   branchID : number;
//   subscriptionMerchantRef : string;
//   paymentMode : string;
//   additionalAmount: number;
//   paymentForTotalCycles : number; // Length
//   discount: number| null;
//   subscriptionPrice: number | null;
//   additionalAmountRemarks: string;
// }
export class WorldnetPayReq {
  subscriptionId: number | null;
  patientId: number | null;
  addedBy: number;
  terminal: string;
  subscriptionMerchantRef: string;
  branchId: number;
  paymentMode: string;
  additionalAmount: number | null;
  additionalAmountRemarks: string;
  subscriptionPrice: number | null;
  discount: number | null;
  taxAmount: number | null;
  paymentForTotalCycles: number | null;
  lastPaidForCycle: number | null;
  discountType: string;
  discountCode: string;
  externalDiscount: number | null;
  customer: PayWorldNetCustomer;
  order: WorldnetPayOrder;
  customerAccount: WorldnetPayCustomerAccount;
  isProductPayment: boolean | null;
  products =  Array<ProductParam>();
  cardPresentPaymentRequest: PayrocPaymentRequest;
  patientreferrals =  Array<UpdateClinicPatientReferralDTO>();
}
export class WorldnetPayOrder
{
  orderId: string|null;
  currency: string|null;
  totalAmount: string|null;
  // amount : string;
  description : string;

}
export class PayWorldNetCustomer {
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  referenceNumber: string;
  notificationLanguage: string;
  billingAddress: PayWorldNetCustomerBillingAddress;
  shippingAddress: PayWorldNetCustomerShippingAddress;
}
export class PayWorldNetCustomerShippingAddress {
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
}
export class PayWorldNetCustomerBillingAddress {
  name: string;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
}
export class WorldnetPayCustomerAccount
{
  accountType: string|null;
  payloadType: string|null;
  credentialsNumber: string|null;
}

export class PayCashParam
{
  patientID: number;
  branchId: number;
  amount: number;
  paymentMode: string;
  paidAgainst: string|null;
  addedBy: number;
  subscriptionId: number | null;
  paymentForTotalCycles: number | null;
  subscriptionPrice: number | null;
  additionalAmount: number | null;
  additionalRemarks : string;
}

export class WorldnetBillingAddressParam
{
  billingaddress1: string|null;
  billingaddress2: string|null;
  billingcity: string|null;
  billingzipCode: string|null;
  billingstate: string|null;
  billingcountry: string|null;
  Id: number | null;
  UserId: number | null;
}