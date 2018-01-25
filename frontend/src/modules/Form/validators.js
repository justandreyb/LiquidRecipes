export const required = (value) => value ? undefined : "Required";

export const mustBeString = (value) => typeof value === "string" ? "Must be a string" : undefined;

export const mustBeNumber = (value) => isNaN(value) ? "Must be a number" : undefined;

export const minLength = (min) => (value) =>
  value.length < min ? undefined : `Length must be greater than ${min}`;

export const maxLength = (max) => (value) =>
  value.length < max ? undefined : `Length must be smaller than ${max}`;

export const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const maxValue = (max) => (value) =>
  isNaN(value) || value >= max ? undefined : `Should be smaller than ${max}`;

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const valuesEqual = (val1, val2) => val1 && val2 && val2 === val1;

