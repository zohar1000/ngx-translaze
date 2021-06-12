const isReplaceAllEnabled = Boolean('a'['replaceAll']);

export const translaze = (value, params?) => {
  if (!params) return value;
  const keys = Object.keys(params);
  for (let i = 0, len = keys.length; i < len && value !== undefined; i++) {
    const key = keys[i];
    if (isReplaceAllEnabled) {
      value = value.replaceAll('{' + keys[i] + '}', params[key]);
    } else {
      const regExp = new RegExp('{' + keys[i] + '}', 'g');
      value = value.replace(regExp, params[key]);
    }
  }
  return value;
};
