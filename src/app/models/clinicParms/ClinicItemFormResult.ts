import { ClinicCalendarItem } from './clinic-calendar-item';

export interface ClinicItemFormResult {
  item: Object;
  opType: string;
  status: boolean;
}

export interface ClinicNotesFormResult {
  opType: string;
  status: boolean;
}

export interface OperationResult {
  item: Object;
  status: boolean;
}