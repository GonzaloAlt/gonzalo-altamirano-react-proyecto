const checkName = (names) => {
  return /^[a-z ,.'-]+$/i.test(names);
};
const checkEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const checkPhone = (phone) => {
  return /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
    phone
  );
};
const checkDiscount = (discountCode) => {};

const checkPostalCode = (postalNum) => {
  return /\b[0-9]\4\}\b/.test(postalNum);
};
export const checkPersonalData = (
  names,
  email,
  phone,
  discountCode,
  postalNum
) => {
  checkName(names);
  checkEmail(email);
  checkPhone(phone);
  checkDiscount(discountCode);
  checkPostalCode(postalNum);
};

const checkCreditCardNumber = (CCNumber, vendor) => {
  let master =
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
  let amex = /^3[47][0-9]{13}$/;
  let visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  return vendor.test(CCNumber);
};

const checkSecurityCode = (securityNum) => {
  return /\b[0-9]\{3\}\b/.test(securityNum);
};

export const checkCreditCard = (names, CCNumber, vendor, securityNum) => {
  checkName(names);
  checkCreditCardNumber(CCNumber, vendor);
  checkSecurityCode(securityNum);
};
