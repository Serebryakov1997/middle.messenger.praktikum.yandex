import './profileField.css';
import { profileFieldTmpl } from './profileField.tmpl';
import Handlebars from 'handlebars';

const styles = {
    inputClass: 'profile-input',
    labelClass: 'profile-label',
    profileFieldType: 'text',
}


export const ProfileField = (
    changeDataFieldName: string,
    changeDataInputId: string,
    labelNameInput: string,
    changeDataInputPlaceholder: string,
    profileFieldValue: string,
    readOnly: string
) => Handlebars.compile(profileFieldTmpl)({
    styles: styles,
    readOnly: readOnly,
    changeDataFieldName: changeDataFieldName,
    changeDataInputId: changeDataInputId,
    labelNameInput: labelNameInput,
    profileFieldValue: profileFieldValue,
    changeDataInputPlaceholder: changeDataInputPlaceholder
});
