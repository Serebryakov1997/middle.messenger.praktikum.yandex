import './profile_field.css';
import { profileFieldTmpl } from './profile_field.tmpl';
import Handlebars from 'handlebars';

const styles = {
    inputType: 'text'
};

export const ProfileField = (profileFieldName, fieldName, fieldValue) => Handlebars.compile(profileFieldTmpl)({
    profileFieldClass: 'profile-field',
    profileFieldName: profileFieldName,
    fieldName: fieldName,
    profileValueClass: 'profile-value',
    value: fieldValue
});