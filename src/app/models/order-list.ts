export class OrderList {
    OrderMasterID: number;
    PatientID: number;
    MRN: string;
    PatientFullName: string;
    InActive: boolean;
    NoZeroQty: boolean;
    CampaignCount: number;
    Campaign: string;
    GPFollowupCateID: number;
    HasunresolvdException: boolean | null;
    Client: string;
    OrderStatus: string;
    OrderType: string;
    CompanyContactID: number;
    FollowupRuleID: number;
    Source: string;
    ContactFirstName: string;
    ContactLastName: string;
    UnResolvedException: string;
    UnResolvedAlert: string;
    QuantityNotmatch: number;
    NotesExists: boolean;
    DateClosed: Date;
    OrderDate: Date | null;
    ShippedDate: Date | null;
    TrackingNumber: string;
    DateApproved: Date | null;
    DatePendingDelivery: Date | null;
    DateCompleted: Date | null;
    GPOrderStatusID: number | null;
    OrderStatusName: string;
    GPShippingModeID: number | null;
    ShippingModeName: string;
    GPOrderTypeID: number | null;
    IVRSurveyID: number | null;
    OrderTypeName: string;
    IsInsuranceOnly: boolean | null;
    IsCashPayment: boolean | null;
    // List<OrderDetail> OrderDetail 

}
