import { SuitesType } from '../../models';
import { SliceStatusType } from '../types';

export type ActionErrorMessage = { errorMessage?: string | null };

export interface ActionType extends ActionErrorMessage {
  status: SliceStatusType;
}

export type SuitesPayloadResult = ActionErrorMessage & {
  suites?: SuitesType | {};
};

export type InitialStateType = SuitesPayloadResult & ActionType;
