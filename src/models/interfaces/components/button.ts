import { CustomType } from '../../../utils';

export interface IButtonProps {
    buttonClass: string;
    buttonName: string;
    redirectUrl: string;
    events: CustomType['EventType']
}
