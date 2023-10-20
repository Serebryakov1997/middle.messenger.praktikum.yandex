import './profileField.css';
import { Block } from '../../../utils';
import { profileFieldTmpl } from './profileField.tmpl';
import { Input } from '../input';


interface ProfileFieldProps {
    [key: string]: string | {} | undefined;
    styles: {
        profileFieldClass: string;
        labelClass: string;
        inputClass: string;
        profileFieldType: string;
        // changeDataInputControl: string;
        validErrProfileClass?: string;
    },
    changeDataInputId: string;
    labelNameInput: string;
    profileFieldValue: string;
    changeDataInputPlaceholder?: string;
    changeDataFieldName: string;
    readOnly?: string;
    validErrorId?: string;
    events?: {
        blur: (e: Event) => void;
    }
}


export class ProfileField extends Block {
    constructor(props: ProfileFieldProps) {
        super('div', props);
    }


    // protected init(): void {
    //     this.children.profileInput = new Input('input', {
    //         name: 'profile',
    //         validErrorId: 'error',
    //         styles: {
    //             inputProfileClass: 'input-email'
    //         },
    //         events: {
    //             blur: (e: Event) => {

    //             }
    //         }
    //     });
    // }

    render(): DocumentFragment {
        return this.compile(profileFieldTmpl, this.props);
    }
}
