export type Indexed<T = unknown> = {
  [key in string]: T;
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  /* eslint no-restricted-syntax: "off" */
  for (const p in rhs) {
    /* eslint no-prototype-builtins: "off" */
    if (!rhs.hasOwnProperty(p)) {
      /* eslint no-continue: "off" */
      continue;
    }

    try {
      if (typeof rhs[p] === 'object') {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }
  return lhs;
}
