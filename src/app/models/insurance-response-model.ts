class Provider {
    providerName: string;
    entityIdentifier: string;
    entityType: string;
    npi: string;
    providerCode: string;
    referenceIdentification: string;
}

class Address {
    address1: string;
    city: string;
    state: string;
    postalCode: string;
}

class Provider2 {
}

class Subscriber {
    memberId: string;
    firstName: string;
    lastName: string;
    gender: string;
    entityIdentifier: string;
    entityType: string;
    dateOfBirth: string;
    groupNumber: string;
    relationToSubscriber: string;
    insuredIndicator: string;
    maintenanceTypeCode: string;
    maintenanceReasonCode: string;
    address: Address;
    provider: Provider2;
}

class SubscriberTraceNumber {
    traceTypeCode: string;
    traceType: string;
    referenceIdentification: string;
    originatingCompanyIdentifier: string;
}

class Payer {
    entityIdentifier: string;
    entityType: string;
    name: string;
    payorIdentification: string;
}

class PlanInformation {
    groupNumber: string;
    priorIdNumber: string;
}

class PlanDateInformation {
    plan: string;
}

class PlanStatu {
    statusCode: string;
    status: string;
    planDetails: string;
    serviceTypeCodes: string[];
}

class BenefitsAdditionalInformation {
    planNumber: string;
}

class BenefitsDateInformation {
    eligibility: string;
}

class AdditionalInformation {
    description: string;
}

class Address2 {
    address1: string;
    city: string;
    state: string;
    postalCode: string;
}

class ProviderInformation {
    providerCode: string;
    referenceIdentification: string;
}

class Contact {
    communicationMode: string;
    communicationNumber: string;
}

class ContactInformation {
    name: string;
    contacts: Contact[];
}

class BenefitsRelatedEntity {
    entityIdentifier: string;
    entityType: string;
    entityName: string;
    entityFirstname: string;
    entityIdentification: string;
    entityIdentificationValue: string;
    address: Address2;
    providerInformation: ProviderInformation;
    contactInformation: ContactInformation;
}

class EligibilityAdditionalInformation {
    codeListQualifierCode: string;
    industryCode: string;
}

class BenefitsInformation {
    code: string;
    name: string;
    coverageLevelCode: string;
    coverageLevel: string;
    serviceTypeCodes: string[];
    serviceTypes: string[];
    planCoverage: string;
    benefitsAdditionalInformation: BenefitsAdditionalInformation;
    benefitsDateInformation: BenefitsDateInformation;
    insuranceTypeCode: string;
    insuranceType: string;
    additionalInformation: AdditionalInformation[];
    headerLoopIdentifierCode: string;
    trailerLoopIdentifierCode: string;
    benefitsRelatedEntity: BenefitsRelatedEntity;
    inPlanNetworkIndicatorCode: string;
    inPlanNetworkIndicator: string;
    timeQualifierCode: string;
    timeQualifier: string;
    benefitAmount: string;
    benefitPercent: string;
    eligibilityAdditionalInformation: EligibilityAdditionalInformation;
    authOrCertIndicator: string;
    quantityQualifierCode: string;
    quantityQualifier: string;
    benefitQuantity: string;
}

export class InsuranceResponseModel {
    controlNumber: string;
    reassociationKey: string;
    tradingPartnerId: string;
    tradingPartnerServiceId: string;
    provider: Provider;
    subscriber: Subscriber;
    subscriberTraceNumbers: SubscriberTraceNumber[];
    payer: Payer;
    planInformation: PlanInformation;
    planDateInformation: PlanDateInformation;
    planStatus: PlanStatu[];
    benefitsInformation: BenefitsInformation[];
}
