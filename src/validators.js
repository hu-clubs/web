// TODO improve validation with max length, regex, etc

export function validateFirstName (value) {
  let error;
  if (!value) error = 'You must enter a first name';
  return error;
}

export function validateLastName (value) {
  let error;
  if (!value) error = 'You must enter a last name';
  return error;
}

// TODO check if an H number has been used
// TODO regex for H number
export function validateHNumber (value) {
  let error;
  if (!value) error = 'You must enter an H number';
  return error;
}

// TODO check if an email has been used
export function validateEmail (value) {
  let error;
  if (!value) error = 'You must enter an email address';
  if (!/[a-zA-Z0-9]+@harding.edu/.test(value)) error = 'You must enter a Harding email address';
  return error;
}

export function validatePassword (value) {
  let error;
  if (!value) error = 'You must enter a password';
  return error;
}

// TODO use this in register form
export function validateConfirmPassword (password, confirmPassword) {
  let error;
  if (!confirmPassword) error = 'You must confirm your password';
  if (password !== confirmPassword) error = 'Your passwords do not match';
  return error;
}

export function validateClubName (value) {
  let error;
  if (!value) error = 'You must enter a club name';
  return error;
}

export function validateClubShortName (value) {
  let error;
  if (!value) error = 'You must enter a club short name';
  return error;
}

export function validateRegister (values) {
  let errors = {};
  if (values.password) { errors.confirmPassword = validateConfirmPassword(values.password, values.confirmPassword); }
  return errors;
}
