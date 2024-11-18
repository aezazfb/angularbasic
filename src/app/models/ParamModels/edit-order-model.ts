import { OrderDetail } from "../order-detail";
import { Patient } from "../Patient";
import { UpdateOrderMasterModel } from "../update-order-master-model";

export class EditOrderModel {
    updatedBy:              number;
    followupRuleID:         number;
    followupCateID:         number;
    noteSubject:            number | null;
    note:                   string | null;
    isMedicare:             boolean | null;
    patient:                Patient;
    order:                  UpdateOrderMasterModel = new UpdateOrderMasterModel();
    orderDetail:            OrderDetail[];
}
