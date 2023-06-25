import './profileField.css';
import { profileFieldTmpl } from './profileField.tmpl';
import Handlebars from 'handlebars';

const styles = {
    changeDataFieldClass: 'profile-field',
    profileFieldType: 'text',
}


export const ProfileField = (
    changeDataFieldName,
    changeDataInputId,
    labelNameInput,
    changeDataInputPlaceholder,
    profileFieldValue,
    readOnly
) => Handlebars.compile(profileFieldTmpl)({
    styles: styles,
    readOnly: readOnly,
    changeDataFieldName: changeDataFieldName,
    changeDataInputId: changeDataInputId,
    labelNameInput: labelNameInput,
    profileFieldValue: profileFieldValue,
    changeDataInputPlaceholder: changeDataInputPlaceholder
});