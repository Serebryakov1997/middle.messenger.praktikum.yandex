import { Block } from '../block';
import { backUpForValid } from './backupForValid';
import { validationError } from './validationError';

export function inputValidation(
  e: Event,
  validator: {
        rule: RegExp;
        errorMsg: string;
    },
  children: { [key: string]: Block },
) {
  const re = validator.rule;
  const targetValue = (<HTMLInputElement>e.target).value;
  const isValid = re.test(targetValue);

  if (!isValid || !targetValue) {
    const msg = validator.errorMsg;
    validationError(children, msg);
    e.preventDefault();
  } else {
    backUpForValid(children);
  }
}
