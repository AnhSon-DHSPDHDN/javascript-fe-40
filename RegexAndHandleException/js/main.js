const REGEX_VALID_EMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const REGEX_VALID_PHONE_NUMBER = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

console.log(REGEX_VALID_EMAIL.test("a")); // false
console.log(REGEX_VALID_EMAIL.test("a@gmail.com")); // true
console.log(REGEX_VALID_PHONE_NUMBER.test("103123")); // false
console.log(REGEX_VALID_PHONE_NUMBER.test("0334567899")); // true

try {
  const data = {}; // DATA từ server trả về

  const temp = data.sum.data + 123;
} catch (error) {
  console.log("error:", error);
} finally {
  console.log("Finally of TRY/CATCH");
}

console.log("End of main js");
