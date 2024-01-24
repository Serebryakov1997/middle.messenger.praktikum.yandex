import { Block } from '../../core/Block/block';
import { backUpForValid } from './backupForValid';
import { validationError } from './validationError';

export function clickValidation(
  stateProps: Record<string, unknown>,
  validators: {
    [key: string]: {
      rule: RegExp;
      errorMsg: string;
    }
  },
  children: { [key: string]: { [key: string]: Block } },
  event: Event,
): boolean {
  const isValidArr: { [key: string]: boolean } = {};

  console.log('stateProps: ', stateProps);
  Object.entries(validators).forEach(([key, value]) => {
    const re = value.rule;

    const isValid = stateProps[key] ? re.test(stateProps[key] as string) : false;
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
    return false;
  } else {
    Object.keys(isValidArr).forEach((key) => {
      backUpForValid(children[key]);
    });
    return true;
  }
}
