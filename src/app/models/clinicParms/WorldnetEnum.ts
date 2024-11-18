export enum WorldnetFrequencyEnum {
    EMPTY = '',
    WEEKLY = 'WEEKLY',
    FORTNIGHTLY = 'FORTNIGHTLY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    YEARLY = 'YEARLY'
}

export enum WorldnetCurrency {
    EMPTY = '',
    USD = 'USD'
}

export enum WorldNetPayloadType
{
    EMPTY = '',
    DIGITAL_WALLET = 'DIGITAL_WALLET',
    EMV = 'EMV',
    KEYED = 'KEYED',
    PAYMENT_TOKEN = 'PAYMENT_TOKEN',
    MAG_STRIPE = 'MAG_STRIPE',
    RAW = 'RAW',
    SECURE_CREDENTIALS = 'SECURE_CREDENTIALS'
}

export enum WorldNetPlanType
{
    MANUAL = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC'
}


export enum PaymentGateway
{
    CARDCONNECT='cardconnect',      //1
    WORLDNET='worldnet'             //2
}


export enum WorldnetAccountType
{
    CHECKING = 'CHECKING',
    SAVINGS = 'SAVINGS'
}