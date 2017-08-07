export const required = (value) => {
  return !value ? [ 'This field cannot be empty' ] : [];
};

export const number = (value) => {
  return value ? [ 'This field must contain only numbers' ] : [];
};

export const date = (value) => {
  return value ? [ 'This field must contain date (yyyy-mm-dd)' ] : [];
};

export const maxLength = (value, length) => {
  return value.length > length ? ['This field can\'t be larger than ', length, ' symbols'] : [];
};

export const minLength = (value, length) => {
  return !value.length < length ? ['This field can\'t be smaller than ', length, ' symbols'] : [];
};
