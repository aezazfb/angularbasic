export class AppointmentReminderRsp {
    PatientID!: number | null;
    AppointmentID!: number | null;
    BranchID!: number | null;
    Note!: string;
    Hash!: string;
}