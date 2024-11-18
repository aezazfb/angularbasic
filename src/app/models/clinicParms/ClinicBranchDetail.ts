import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ClinicBranchDetail {
    BranchID!: number;
    CompanyID!: number;
    BranchCode!: string;
    BranchName!: string;
    ContactNumber!: string;
    FaxNumber!: string;
    EmailAddress!: string;
    AddressLine1!: string;
    AddressLine2!: string;
    GPCountryID!: number;
    Country!: string | null;
    GPStateID!: number;
    State!: string | null;
    CountryID!: number;
    City!: string;
    ZipCode!: string;
    InActive!: boolean;
    Comments!: string;
    SpecialNeeds!: string;
    NPI!: string;
    AppointmentLimit!: number;
    Logo!: string;
    WebSite!: string;
    MerchantID!: string;
    SubDomain!: string;
    ApiInformation1!: string; // ApiKeyOrUsername
    ApiInformation2!: string; // ApiUrl
    ApiInformation3!: string; // ApiPassword
    ApiInformation4!: string; // terminalid
    ApiInformation5!: string; // terminalSecret
    payrocApiInformation1!: string; // PayrocApiKeyOrUsername
    payrocApiInformation2!: string; // PayrocApiUrl
    payrocApiInformation3!: string; // PayrocApiPassword
    EnableAutomaticSubscriptionPayment!: boolean;
    PaymentGateway!: string;
    Addby!: number;
    UpdatedBy!: number;
    ReminderDays!: number;
    ReminderFrequency!: string;
}
export class PaymentTerminalParams {
    tId!: number;
    branchId!: number;
    tDesc!: string;
    tRefId!: string;
    isDeleted!: boolean;
    addby!: number;
    addOn!: string;
    updatedBy!: number;
    updatedOn!: string;
    terminalSecret!: string;
    terminalType!: string;
    terminalSrNo!: string;
}
