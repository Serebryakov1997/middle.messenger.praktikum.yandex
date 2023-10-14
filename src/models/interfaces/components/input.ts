import { CustomType } from '../../../utils';

export interface IInputProps {
    labelName: string;
    name: string;
    placeholder?: string;
    events: CustomType['EventType']
}
