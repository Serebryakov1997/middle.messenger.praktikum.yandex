import { getInputValue } from '../../utils';
import './profileChangePasswdField.css';
import { profileChangePasswdFieldTmpl } from './profileChangePasswdField.tmpl';
import Handlebars from 'handlebars';

const styles = {
    changeDataFieldClass: 'profile-change-passwd-field',
    profileFieldType: 'text',
}

console.log(getInputValue('password-input'));
export const ProfileChangePasswdField = (
    changeDataFieldName,
    changeDataInputId,
    labelNameInput,
    changeDataInputPlaceholder,
    profileFieldValue,
    readOnly
) => Handlebars.compile(profileChangePasswdFieldTmpl)({
    styles: styles,
    readOnly: readOnly,
    changeDataFieldName: changeDataFieldName,
    changeDataInputId: changeDataInputId,
    labelNameInput: labelNameInput,
    profileFieldValue: getInputValue(changeDataInputId),
    changeDataInputPlaceholder: changeDataInputPlaceholder
});