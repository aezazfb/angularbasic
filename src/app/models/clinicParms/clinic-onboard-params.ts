export class NewClinicParams {
    agreementInfo!: ClinicAgreementInfoParams;
    basicInfo!: ClinicOffice;
    paymentInfo!: CreateClinicPaymentInfoDTO;
}
export class ClinicOffice {
    branchID!: number;
    companyID!: number;
    branchCode!: string;
    branchName!: string;
    contactNumber!: string;
    faxNumber!: string;
    emailAddress!: string;
    addressLine1!: string;
    addressLine2!: string;
    gPCountryID!: number;
    gPStateID!: number;
    stateName!: string;
    city!: string;
    zipCode!: string;
    inActive!: boolean;
    comments!: string;
    specialNeeds!: string;
    nPI!: string;
    appointmentLimit!: number;
    logo!: string;
    logofile!: any;
    webSite!: string;
    merchantID!: string;
    enableAutomaticSubscriptionPayment!: boolean;
    subDomain!: string;
    paymentGateway!: string;
    addby!: number;
    updatedBy!: number | null;
    reminderDays!: number | null;
    reminderFrequency!: string;
    clincSubscriptionPackageId!: number | null;
    monthlyCharges!: number | null;
    sendPaymentRemindersToPatient!: boolean | null;
    apiInformation1!: string;
    apiInformation2!: string;
    apiInformation3!: string;
    apiInformation4!: string;
    apiInformation5!: string;
    payrocApiInformation1!: string;
    payrocApiInformation2!: string;
    payrocApiInformation3!: string;
    contactperson!: string;
    packageId!: number;
}
export class ClinicAgreementInfoParams {
    agreementCheck!: boolean;
    signatureBase64!: string;
    personName!: string;
    hash!: string;
    packageId!: number;
}

export class CreateClinicPaymentInfoDTO {
    branchId!: number;
    firstName!: string;
    lastName!: string;
    companyName!: string;
    addressLine1!: string;
    addressLine2!: string;
    state!: string;
    city!: string;
    zipcode!: string;
    routingNumber!: string;
    accountNumberOrCardRef!: string;
    accountType!: string;
    sECCode!: string;
    infoType!: string;
    isDefault!: boolean | null;
    remarks!: string;
    createdBy!: number | null;
    isActive!: boolean | null;
}

