export class PayrocPaymentRequest {
    operator: string|null;;
    processingTerminalId: string;
    order: PayrocOrder;
    customizationOptions: CustomizationOptions;
    autoCapture: boolean;
    branchId: number;
    serialNumber: string;
}
export class CustomizationOptions {
    entryMethod: string;
}
export class PayrocOrder {
    orderId: string;
    currency: string;
    amount: number;
}