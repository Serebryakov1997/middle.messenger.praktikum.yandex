import { Block } from '../block';
import { backUpForValid } from './backupForValid';
import { validationError } from './validationError';

export function clickValidation(
    formData: FormData,
    validators: {
        [key: string]: {
            rule: RegExp;
            errorMsg: string;
        }
    },
    children: { [key: string]: { [key: string]: Block } },
    event: Event,
) {
    const isValidArr: { [key: string]: boolean } = {};

    Object.entries(validators).forEach(([key, value]) => {
        const formValue = formData.get(key);
        const re = value.rule;

        const isValid = formValue ? re.test(formValue as string) : false;
        isValidArr[key] = isValid;
    });


    if (Object.values(isValidArr).includes(false)) {
        Object.entries(isValidArr).forEach(([key, value]) => {
            if (!value) {
                const msg = validators[key].errorMsg;
                validationError(children[key], msg);
            }
        });
        event.preventDefault();
    } else {
        Object.keys(isValidArr).forEach((key) => {
            backUpForValid(children[key]);
        });
    }
}
