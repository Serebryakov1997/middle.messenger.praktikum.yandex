import './profileChangePasswdField.css';
import { profileChangePasswdFieldTmpl } from './profileChangePasswdField.tmpl';
import Handlebars from 'handlebars';

const styles = {
    changeDataFieldClass: 'profile-change-passwd-field'
}

export const ProfileChangePasswdField = (
    changeDataFieldName,
    changeDataInputId,
    labelNameInput,
    changeDataInputPlaceholder
) => Handlebars.compile(profileChangePasswdFieldTmpl)({
    styles: styles,
    changeDataFieldName: changeDataFieldName,
    changeDataInputId: changeDataInputId,
    labelNameInput: labelNameInput,
    changeDataInputPlaceholder: changeDataInputPlaceholder
});